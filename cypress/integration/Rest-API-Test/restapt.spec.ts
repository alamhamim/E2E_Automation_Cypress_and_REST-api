/// <reference types="cypress" />
describe('Verify API', () => {
    it('Printing out the api response body from users', () => {
        cy.request({
            method : 'GET',
            url : 'http://localhost:3000/users'
        }).then((response) =>{
            cy.log(JSON.stringify(response.body));
        })
    });
    it('Verify the user name first name and the status code', () => {
        cy.request({
            method: 'GET',
            url: 'http://localhost:3000/users'
        }).then((res) =>{
            let jsonData = res.body;
            let statusCode = res.status;
            expect(jsonData[0].name).to.be.eq('Gandharva Kocchar');
            expect(statusCode).to.be.eq(200);
        })
    });
    it('Create an user in posts and verify the status code and user info', () => {
        cy.request({
            method : 'POST',
            url: 'http://localhost:3000/posts',
            body :{
                'first_name': 'Dummy',
                'last_name': 'One',
                'email': 'dummy_one@email.com',
                'cell': 12345667889
            }
        }).then((res) =>{
            let resBody = res.body;
            let statusCode = res.status;
            expect(statusCode).to.eq(201);
            expect(resBody).has.property('first_name', 'Dummy');
            expect(resBody).has.property('last_name', 'One');
        })
    });
    it('Delete user that was created in the post', () => {
        cy.request({
            method : 'DELETE',
            url : 'http://localhost:3000/posts/1'
        }).then((res) =>{
            let statusCode = res.status;
            expect(statusCode).eq(200);
        })
    });
    it('Verify if the user was deleted', () => {
        cy.request({
            method : 'GET',
            url : 'http://localhost:3000/posts'
        }).then((res) =>{
            let statusCode = res.status;
            expect(statusCode).to.eq(200);
        })
    });
});