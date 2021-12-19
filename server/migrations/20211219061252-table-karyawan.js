'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function(options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function(db) {
  db.createTable('table_karyawan', {
    karyawan_id: {
      type: 'int',
      length: 11,
      notNull: true,
      primaryKey: true,
      autoIncrement: true
    },
    karyawan_nama: {
      type: 'string',
      length: 100
    },
    karyawan_umur: {
      type: 'string',
      length: 10
    },
    karyawan_alamat: {
      type: 'string'
    },
    karyawan_jabatan: {
      type: 'string',
      length: 30
    },
  }, function(err) {
    if (err) return callback(err);
    return callback();
  });
};

exports.down = function(db, callback) {
  db.dropTable('table_karyawan', callback)
};

exports._meta = {
  "version": 1
};
