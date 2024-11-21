"use strict";

// controllers/transfertController.js
var Transfert = require('../models/Transfert'); // Créer un transfert


exports.createTransfert = function _callee(req, res) {
  var transfert;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          transfert = new Transfert(req.body);
          _context.next = 4;
          return regeneratorRuntime.awrap(transfert.save());

        case 4:
          res.status(201).json(transfert);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(400).json({
            message: _context.t0.message
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // Obtenir tous les transferts


exports.getAllTransferts = function _callee2(req, res) {
  var transferts;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          _context2.next = 3;
          return regeneratorRuntime.awrap(Transfert.find());

        case 3:
          transferts = _context2.sent;
          res.status(200).json(transferts);
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.status(500).json({
            message: _context2.t0.message
          });

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
}; // Obtenir un transfert par ID


exports.getTransfertById = function _callee3(req, res) {
  var transfert;
  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(Transfert.findById(req.params.id));

        case 3:
          transfert = _context3.sent;

          if (transfert) {
            _context3.next = 6;
            break;
          }

          return _context3.abrupt("return", res.status(404).json({
            message: 'Transfert non trouvé'
          }));

        case 6:
          res.status(200).json(transfert);
          _context3.next = 12;
          break;

        case 9:
          _context3.prev = 9;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            message: _context3.t0.message
          });

        case 12:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 9]]);
}; // Mettre à jour un transfert


exports.updateTransfert = function _callee4(req, res) {
  var transfert;
  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.prev = 0;
          _context4.next = 3;
          return regeneratorRuntime.awrap(Transfert.findByIdAndUpdate(req.params.id, req.body, {
            "new": true
          }));

        case 3:
          transfert = _context4.sent;

          if (transfert) {
            _context4.next = 6;
            break;
          }

          return _context4.abrupt("return", res.status(404).json({
            message: 'Transfert non trouvé'
          }));

        case 6:
          res.status(200).json(transfert);
          _context4.next = 12;
          break;

        case 9:
          _context4.prev = 9;
          _context4.t0 = _context4["catch"](0);
          res.status(400).json({
            message: _context4.t0.message
          });

        case 12:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[0, 9]]);
}; // Supprimer un transfert


exports.deleteTransfert = function _callee5(req, res) {
  var transfert;
  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.prev = 0;
          _context5.next = 3;
          return regeneratorRuntime.awrap(Transfert.findByIdAndDelete(req.params.id));

        case 3:
          transfert = _context5.sent;

          if (transfert) {
            _context5.next = 6;
            break;
          }

          return _context5.abrupt("return", res.status(404).json({
            message: 'Transfert non trouvé'
          }));

        case 6:
          res.status(204).send();
          _context5.next = 12;
          break;

        case 9:
          _context5.prev = 9;
          _context5.t0 = _context5["catch"](0);
          res.status(500).json({
            message: _context5.t0.message
          });

        case 12:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[0, 9]]);
};
//# sourceMappingURL=transfertController.dev.js.map
