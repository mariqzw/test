describe('Feedback Form Tests', () => {
    beforeEach(() => {
      // Переход на страницу формы обратной связи
      cy.visit('https://www.testograf.ru/ru/blog/feedback-form-template');
    });
  
    it('should successfully submit the form with valid data', () => {
      // Ввод данных в поля формы
      cy.get('input[name="name"]').type('Тестовое Имя');
      cy.get('input[name="email"]').type('test@example.com');
      cy.get('textarea[name="message"]').type('Это тестовое сообщение.');
  
      // Отправка формы
      cy.get('button[type="submit"]').click();
  
      // Проверка отображения сообщения об успешной отправке
      cy.contains('Ваше сообщение успешно отправлено').should('be.visible');
    });
  });