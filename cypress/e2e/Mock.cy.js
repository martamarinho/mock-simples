


describe('Mock API - Usuarios', () => {

  it('Deve buscar usuarios do json-server', () => {

    cy.request('GET', 'http://localhost:3000/usuarios')
      .then((response) => {
        expect(response.status).to.eq(200)
        expect(response.body[0].nome).to.eq('Marta')
      })

  })
it('Deve buscar usuarios do json-server', () => {

       cy.request('POST', 'http://localhost:3000/usuarios', {
      nome: 'João',
      email: 'joao@email.com'
      
 }).then((response) => {
   expect(response.status).to.eq(201)

 })
      
      
      })


})

        

    

