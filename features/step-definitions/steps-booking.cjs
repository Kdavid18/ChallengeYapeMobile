const {Given, Then, When} = require("@wdio/cucumber-framework");
const HomeScreen = require("../screenObjects/home-screen.cjs");
const BookingScreen = require("../screenObjects/booking-screen.cjs");
const EnterDataScreen = require("../screenObjects/enter-data-screen.cjs");

const homeScreen = HomeScreen;
const bookingScreen = BookingScreen;
const enterDataScreen = EnterDataScreen;

Given(/^Usuario inicia sesion con email (.*) y (.*)$/, async function (email, password) {
    await homeScreen.successLogin(email, password);
});



When(/^Ingresa la ciudad de (.*)$/, async function (destino) {
    await bookingScreen.destination(destino)
});

When(/^Ingresa la (.*) y (.*) de reserva$/, async function (fecha_inicio, fecha_fin) {
    await bookingScreen.dateBooking(fecha_inicio, fecha_fin);
});

When(/^Selecciona la cantidad de (.*), huespedes (.*) y (.*)$/, async function (habitaciones, adultos, menores, edad) {
    await bookingScreen.selectGuestInformation(habitaciones, adultos, menores, edad)
});

Then(/^Se muestran los resultados de la busqueda con (.*) y (.*) y (.*)$/, async function (destino, fecha_inicio, fecha_fin) {
    await bookingScreen.searchHotel(destino, fecha_inicio, fecha_fin);
});

When(/^Usuario selecciona la segunda opcion del listado de resultados$/, async function () {
    await bookingScreen.selectProperty();
});

When(/^Ingresa los datos de la reserva (.*), (.*), (.*) y (.*)$/, async function (nombre, apellido, email, telefono, pais) {
    await enterDataScreen.confirmBooking(nombre, apellido, email, telefono, pais)
});

Given(/^Usuario inicia sesion con email (.*) y (.*) errado$/, async function (email, password) {
    await homeScreen.enterCredentials(email, password);
});

When(/^Confirma las credenciañles$/, async function () {
    await homeScreen.confirmLogin();
});

Then(/^No sepermite ingreso por contraseña incorrecta$/, async function () {
    await homeScreen.failedLogin();
});
