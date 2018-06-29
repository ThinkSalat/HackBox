'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _models = require('./models');

var _graphqlSubscriptions = require('graphql-subscriptions');

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

var pubsub = new _graphqlSubscriptions.PubSub();
var JOINED_ROOM = 'JOINED_ROOM';
var CREATED_ROOM = 'CREATED_ROOM';
var REMOVED_ROOM = 'REMOVED_ROOM';

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
        var room;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                room = new _models.Room({ code: code, numRounds: numRounds, gameType: gameType });
                _context.next = 3;
                return room.save();

              case 3:
                pubsub.publish(CREATED_ROOM, { createdRoom: room });
                return _context.abrupt('return', room);

              case 5:
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
    updateRoom: function () {
      var _ref8 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(_, _ref7) {
        var id = _ref7.id,
            code = _ref7.code;
        return regeneratorRuntime.wrap(function _callee3$(_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                _context3.next = 2;
                return _models.Room.findByIdAndUpdate(id, { code: code });

              case 2:
                return _context3.abrupt('return', true);

              case 3:
              case 'end':
                return _context3.stop();
            }
          }
        }, _callee3, undefined);
      }));

      function updateRoom(_x5, _x6) {
        return _ref8.apply(this, arguments);
      }

      return updateRoom;
    }(),
    buildDeck: function () {
      var _ref10 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(_, _ref9) {
        var code = _ref9.code,
            cardType = _ref9.cardType,
            numCards = _ref9.numCards;
        var deck;
        return regeneratorRuntime.wrap(function _callee4$(_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _models.Card.aggregate().match({ cardType: cardType }).sample(numCards).exec();

              case 2:
                deck = _context4.sent;
                _context4.next = 5;
                return _models.Room.findOneAndUpdate({ code: code }, { $set: { deck: deck } });

              case 5:
                return _context4.abrupt('return', _context4.sent);

              case 6:
              case 'end':
                return _context4.stop();
            }
          }
        }, _callee4, undefined);
      }));

      function buildDeck(_x7, _x8) {
        return _ref10.apply(this, arguments);
      }

      return buildDeck;
    }(),
    addPlayer: function () {
      var _ref12 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee5(_, _ref11) {
        var code = _ref11.code,
            username = _ref11.username;
        var usernameTaken, player, room;
        return regeneratorRuntime.wrap(function _callee5$(_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _context5.next = 2;
                return _models.Room.findOne({ code: code, "players.username": username }).exec();

              case 2:
                usernameTaken = _context5.sent;

                if (!usernameTaken) {
                  _context5.next = 7;
                  break;
                }

                usernameTaken = "Username taken";
                _context5.next = 10;
                break;

              case 7:
                player = new _models.Player({ username: username, score: 0 });
                _context5.next = 10;
                return _models.Room.update({ code: code }, { $push: { players: player } });

              case 10:
                room = _models.Room.findOne({ code: code });

                pubsub.publish(JOINED_ROOM + '.' + code, { joinedRoom: room, usernameTaken: usernameTaken });
                return _context5.abrupt('return', room);

              case 13:
              case 'end':
                return _context5.stop();
            }
          }
        }, _callee5, undefined);
      }));

      function addPlayer(_x9, _x10) {
        return _ref12.apply(this, arguments);
      }

      return addPlayer;
    }(),
    addPlayerHand: function () {
      var _ref14 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee6(_, _ref13) {
        var code = _ref13.code,
            username = _ref13.username,
            numCards = _ref13.numCards,
            cardType = _ref13.cardType;
        var cards;
        return regeneratorRuntime.wrap(function _callee6$(_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                _context6.next = 2;
                return _models.Card.aggregate().match({ cardType: cardType }).sample(numCards).exec();

              case 2:
                cards = _context6.sent;
                _context6.next = 5;
                return _models.Room.findOneAndUpdate({ code: code, "players.username": username }, { $push: { "players.$.hand": cards } });

              case 5:
                return _context6.abrupt('return', _context6.sent);

              case 6:
              case 'end':
                return _context6.stop();
            }
          }
        }, _callee6, undefined);
      }));

      function addPlayerHand(_x11, _x12) {
        return _ref14.apply(this, arguments);
      }

      return addPlayerHand;
    }(),
    addPlayerScore: function () {
      var _ref16 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee7(_, _ref15) {
        var code = _ref15.code,
            username = _ref15.username,
            points = _ref15.points;
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
        return _ref16.apply(this, arguments);
      }

      return addPlayerScore;
    }()
  },
  Subscription: {
    joinedRoom: {
      subscribe: function subscribe(_, _ref17) {
        var code = _ref17.code;
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
    }
  }
};

exports.default = resolvers;