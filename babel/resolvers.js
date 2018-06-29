'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _models = require('./models');

var _graphqlSubscriptions = require('graphql-subscriptions');

var _apolloUtilities = require('apollo-utilities');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var pubsub = new _graphqlSubscriptions.PubSub();
var JOINED_ROOM = 'JOINED_ROOM';
var CREATED_ROOM = 'CREATED_ROOM';
var REMOVED_ROOM = 'REMOVED_ROOM';
var UPDATE_STATUS = 'UPDATE_STATUS';

require("babel-polyfill");

var resolvers = {
  Query: {
    rooms: function rooms() {
      return _models.Room.find();
    },
    findRoom: function findRoom(_, _ref) {
      var code = _ref.code;
      return _models.Room.findOne({ code: code });
    },
    findCards: function findCards(_, _ref2) {
      var cardType = _ref2.cardType,
          numCards = _ref2.numCards;
      return _models.Card.aggregate().match({ cardType: cardType }).sample(numCards);
    }
  },
  Mutation: {
    createRoom: function () {
      var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_, _ref3) {
        var code = _ref3.code,
            numRounds = _ref3.numRounds,
            gameType = _ref3.gameType;
        var status, room;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                status = new _models.Status();
                room = new _models.Room({ code: code, numRounds: numRounds, gameType: gameType, status: status });
                _context.next = 4;
                return room.save();

              case 4:
                pubsub.publish(CREATED_ROOM, { createdRoom: room });
                return _context.abrupt('return', room);

              case 6:
              case 'end':
                return _context.stop();
            }
          }
        }, _callee, undefined);
      }));

      function createRoom(_x, _x2) {
        return _ref4.apply(this, arguments);
      }

      return createRoom;
    }(),
    removeRoom: function () {
      var _ref6 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(_, _ref5) {
        var id = _ref5.id;
        return regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return _models.Room.findByIdAndRemove(id);

              case 2:
                pubsub.publish(REMOVED_ROOM, { removedRoom: id });
                return _context2.abrupt('return', true);

              case 4:
              case 'end':
                return _context2.stop();
            }
          }
        }, _callee2, undefined);
      }));

      function removeRoom(_x3, _x4) {
        return _ref6.apply(this, arguments);
      }

      return removeRoom;
    }(),
    // buildDeck: async (_, {code, cardType, numCards}) => {
    //   const deck = await Card.aggregate().match({ cardType }).sample(numCards).exec()
    //   return await Room.findOneAndUpdate({ code }, { $set: { deck }})
    // },
    addPlayer: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_, _ref7) {
        var code = _ref7.code,
            username = _ref7.username;
        var usernameTaken, player, room;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _models.Room.findOne({ code: code, "players.username": username }).exec();

              case 2:
                usernameTaken = _context3.sent;

                if (!usernameTaken) {
                  _context3.next = 7;
                  break;
                }

                usernameTaken = "Username taken";
                _context3.next = 10;
                break;

              case 7:
                player = new _models.Player({ username: username, score: 0 });
                _context3.next = 10;
                return _models.Room.update({ code: code }, { $push: { players: player } });

              case 10:
                room = _models.Room.findOne({ code: code });

                pubsub.publish(JOINED_ROOM + '.' + code, { joinedRoom: room, usernameTaken: usernameTaken });
                return _context3.abrupt('return', room);

              case 13:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, undefined);
      }));

      function addPlayer(_x5, _x6) {
        return _ref8.apply(this, arguments);
      }

      return addPlayer;
    }(),
    addPlayerHand: function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_, _ref9) {
        var code = _ref9.code,
            username = _ref9.username,
            numCards = _ref9.numCards,
            cardType = _ref9.cardType;
        var cards;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _models.Card.aggregate().match({ cardType: cardType }).sample(numCards).exec();

              case 2:
                cards = _context4.sent;
                _context4.next = 5;
                return _models.Room.findOneAndUpdate({ code: code, "players.username": username }, { $push: { "players.$.hand": cards } });

              case 5:
                return _context4.abrupt('return', _context4.sent);

              case 6:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, undefined);
      }));

      function addPlayerHand(_x7, _x8) {
        return _ref10.apply(this, arguments);
      }

      return addPlayerHand;
    }(),
    retrieveCards: function () {
      var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(_, _ref11) {
        var code = _ref11.code,
            numCards = _ref11.numCards,
            cardType = _ref11.cardType;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, undefined);
      }));

      function retrieveCards(_x9, _x10) {
        return _ref12.apply(this, arguments);
      }

      return retrieveCards;
    }(),
    updateStatus: function () {
      var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(_, _ref13) {
        var code = _ref13.code,
            options = _ref13.options;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _models.Room.findOneAndUpdate({ code: code }, { $set: { status: options } }, function (err, _ref15) {
                  var status = _ref15.status;

                  status = status._doc;
                  pubsub.publish(UPDATE_STATUS + '.' + code, { updateStatus: status });
                });

              case 2:
                return _context6.abrupt('return', _context6.sent);

              case 3:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, undefined);
      }));

      function updateStatus(_x11, _x12) {
        return _ref14.apply(this, arguments);
      }

      return updateStatus;
    }(),
    addPlayerScore: function () {
      var _ref17 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(_, _ref16) {
        var code = _ref16.code,
            username = _ref16.username,
            points = _ref16.points;
        return regeneratorRuntime.wrap(function _callee7$(_context7) {
          while (1) {
            switch (_context7.prev = _context7.next) {
              case 0:
                _context7.next = 2;
                return _models.Room.findOneAndUpdate({ code: code, "players.username": username }, { $inc: { "players.$.score": points } });

              case 2:
                return _context7.abrupt('return', _context7.sent);

              case 3:
              case 'end':
                return _context7.stop();
            }
          }
        }, _callee7, undefined);
      }));

      function addPlayerScore(_x13, _x14) {
        return _ref17.apply(this, arguments);
      }

      return addPlayerScore;
    }()
  },
  Subscription: {
    joinedRoom: {
      subscribe: function subscribe(_, _ref18) {
        var code = _ref18.code;
        return pubsub.asyncIterator(JOINED_ROOM + '.' + code);
      }
    },
    createdRoom: {
      subscribe: function subscribe() {
        return pubsub.asyncIterator(CREATED_ROOM);
      }
    },
    removedRoom: {
      subscribe: function subscribe() {
        return pubsub.asyncIterator(REMOVED_ROOM);
      }
    },
    updateStatus: {
      subscribe: function subscribe(_, _ref19) {
        var code = _ref19.code;
        return pubsub.asyncIterator(UPDATE_STATUS + '.' + code);
      }
    }
  }
};

exports.default = resolvers;