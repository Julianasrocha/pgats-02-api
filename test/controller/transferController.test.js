//Bibliotecas
const request = require('supertest');
const sinon = require('sinon');
const { expect } = require('chai');

//Aplicacao
const app = require('../../app')

//Mock
const transferService = require('../../service/transferService')

// Testes
describe('Transfer Controller', () => {
    describe('POST /transfers', () => {
        it('Quando informo destinatarios inexistente recebo 400', async () => {
            const resposta = await request(app)
                .post('/transfers')
                .send({
                    from: "julianaaaa",
                    to: "pedro",
                    value: 100

                });

            expect(resposta.status).to.equal(400);
            expect(resposta.body).to.have.property('error', 'Usuário remetente ou destinatário não encontrado');

        });

        it('Usando Mocks: Quando informo destinatarios inexistente recebo 400', async () => {
            //mocar apenas a funcao transfer do service
            const transferServiceMock = sinon.stub(transferService, 'transfer')
            transferServiceMock.throws(new Error('Usuário remetente ou destinatário não encontrado'))

            const resposta = await request(app)
                .post('/transfers')
                .send({
                    from: "juliana",
                    to: "pedro",
                    value: 100

                });

            expect(resposta.status).to.equal(400);
            expect(resposta.body).to.have.property('error', 'Usuário remetente ou destinatário não encontrado')

            //Reseto o Mock
            sinon.restore();

        });

        it('Usando Mocks: Quando informo valores válidos eu tenho sucesso com 201 CREATED', async () => {
            // Mocar apenas a função transfer do Service
            const transferServiceMock = sinon.stub(transferService, 'transfer');
            transferServiceMock.returns({
                from: "juliana",
                to: "pedro",
                value: 100,
                date: new Date().toISOString()
            });

            const resposta = await request(app)
                .post('/transfers')
                .send({
                    from: "juliana",
                    to: "pedro",
                    value: 100
                });

            expect(resposta.status).to.equal(201);
            expect(resposta.body).to.have.property('from', 'juliana');
            expect(resposta.body).to.have.property('to', 'pedro');
            expect(resposta.body).to.have.property('value', 100);

            //reseto o mock
            sinon.restore();
        });
    });

    describe('GET /transfers', () => {
        //its ficam aqui

    });

});
