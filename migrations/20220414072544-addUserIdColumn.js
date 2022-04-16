'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    // urls에 userId 필드 추가
    await queryInterface.addColumn('urls', 'userId', Sequelize.INTEGER);

    // userId를 FK로 지정
    await queryInterface.addConstraint('urls', {
      fields: ['userId'],
      type: 'foreign key',
      name: 'custom_fkey_constraint_name',
      references: { // Required field
        table: 'users',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: async (queryInterface, Sequelize) => {
    // userId를 FK에서 해제
    await removeConstraint('urls', 'custom_fkey_constraint_name');

    // urls에 userId 필드 제거
    await removeColumn('urls', 'userId');
  }
};
