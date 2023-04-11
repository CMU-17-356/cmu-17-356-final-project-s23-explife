import { expect } from 'chai';

import User from '../models/user_model';
describe('user', function() {
    it('should have all necessary user fields', function() {
        var a = new User();
        const user = a.validateSync();

        expect(user.errors.firstName).to.exist;
        expect(user.errors.lastName).to.exist;
        expect(user.errors.password).to.exist;
        expect(user.errors.email).to.exist;
    });
});

import List from '../models/list_model';
describe('list', function() {
    it('should have all necessary list fields', function() {
        var a = new List();
        const list = a.validateSync();

        expect(list.errors.date).to.exist;
        expect(list.errors.items).to == undefined;
        expect(list.errors.user).to == undefined;
        expect(list.errors.story).to == undefined;
        expect(list.errors.imageURL).to == undefined;
    });
});

import ListItem from '../models/list_item_model';
describe('listItem', function() {
    it('should have all necessary listItem fields', function() {
        var a = new ListItem();
        const listItem = a.validateSync();

        expect(listItem.errors.deadline).to.exist;
        expect(listItem.errors.taskName).to.exist;
        expect(listItem.errors.priority).to.exist;
        expect(listItem.errors.completed).to.exist;
    });
});

