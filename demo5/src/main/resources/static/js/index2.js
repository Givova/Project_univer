
      const authButton = document.getElementById('authButton'); 
       
      // Проверяем, авторизован ли пользователь 
      if (localStorage.getItem('isLoggedIn') === 'true') { 
       authButton.textContent = 'Профиль'; // Меняем текст кнопки на "Профиль" 
      } 
       
      // Обработчик события для кнопки 
      authButton.addEventListener('click', () => { 
       // Проверяем текст кнопки и перенаправляем 
       if (authButton.textContent === 'Войти') { 
       // Если текст кнопки "Войти", перенаправляем на страницу авторизации 
       window.location.href = 'vibor_reg_aut.html'; // Убедитесь, что путь верный 
       } else { 
       // Если текст кнопки "Профиль", перенаправляем на страницу профиля 
       window.location.href = 'profil.html'; // Убедитесь, что путь верный 
       } 
      }); 