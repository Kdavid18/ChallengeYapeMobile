Feature: Reservacion de hospedaje en booking

  Scenario Outline: Reservacion exitosa
    Given Usuario inicia sesion con email <email> y <password>
    When Ingresa la ciudad de <destino>
    And Ingresa la <fecha_inicio> y <fecha_fin> de reserva
    And Selecciona la cantidad de <habitaciones>, huespedes <adultos> y <menores> con su <edad>
    Then Se muestran los resultados de la busqueda con <destino> y <fecha_inicio> y <fecha_fin>
    When Usuario selecciona la segunda opcion del listado de resultados
    And Ingresa los datos de la reserva <nombre>, <apellido>, <email> <telefono> y <pais>

    Examples:
      | email                     | password        | destino | fecha_inicio    | fecha_fin       | habitaciones | adultos | menores | edad        | nombre | apellido | telefono   | pais     |
      | kdavid.enriquez@gmail.com | Testyapebooking | Cusco   | 24 January 2024 | 28 January 2024 | 1            | 2       | 1       | 5 years old | David  | Enriquez | 3057705175 | Colombia |


  Scenario Outline: Reservacion fallida - Credenciales invalidas
    Given Usuario inicia sesion con email <email> y <password> errado
    When Confirma las credenciañles
    Then No sepermite ingreso por contraseña incorrecta

    Examples:
      | email                  | password   |
      | deivid1923@hotmail.com | Test.123** |