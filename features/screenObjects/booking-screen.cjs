function formatearFecha(fecha) {
    const fechaObj = new Date(fecha);
    const mesAbreviado = fechaObj.toLocaleString('en-us', { month: 'short' });
    const dia = fechaObj.getDate();
    return `${mesAbreviado} ${dia}`;
}

class BookingScreen {
    get searchDestination() {
        return $('[resource-id="com.booking:id/facet_search_box_basic_field_label"][text="Enter your destination"]');
    }

    get inputDestination() {
        return $('[id="com.booking:id/facet_with_bui_free_search_booking_header_toolbar_content"]');
    }

    get selectDestination() {
        return $('[resource-id="com.booking:id/view_disambiguation_destination_subtitle"][text="City in Cusco, Peru"]');
    }

    get searchDateBooking() {
        return $('[resource-id="com.booking:id/facet_search_box_basic_field_label"]');
    }

    get confirmDateBooking() {
        return $('[id="com.booking:id/facet_date_picker_confirm"]');
    }

    get guestInformation() {
        return $('[elementId="00000000-0000-03d4-ffff-ffff0000012b"]');
    }

    get addRooms() {
        return $('[elementId="00000000-0000-03d6-ffff-ffff000001f0"]');
    }

    get addAdults() {
        return $('[elementId="00000000-0000-03d6-ffff-ffff000001f8"]');
    }

    get addChildren() {
        return $('[elementId="00000000-0000-03d6-ffff-ffff00000200"]');
    }

    get buttonApply() {
        return $('[id="com.booking:id/group_config_apply_button"]');
    }

    get buttonSearch() {
        return $('[id="com.booking:id/facet_search_box_cta"]');
    }

    get validateDates() {
        return $('[resource-id="com.booking:id/searchbox_dates"]');
    }

    get validateDestination() {
        return $('[resource-id="com.booking:id/searchbox_destination"]');
    }

    get selectOptions() {
        return $('androidx.recyclerview.widget.RecyclerView android.view.ViewGroup:nth-child(3)');
    }

    get seeOptions() {
        return $('[resource-id="com.booking:id/property_availability_cta_facetframe"]');
    }

    get selectRoom() {
        return $('[id="com.booking:id/property_availability_cta_facetframe"][index="0"]');
    }

    get buttonReserve() {
        return $('[resource-id="com.booking:id/main_action"][text="Reserve"]');
    }

    async destination(destino) {
        await this.searchDestination.click();
        await this.inputDestination.setValue(destino);
        await this.selectDestination.click();
    }

    async dateBooking(fecha_inicio, fecha_fin) {
        await this.searchDateBooking.click();
        await $(`[accessibility-id="${fecha_inicio}"]`).click();
        await $(`[accessibility-id="${fecha_fin}"]`).click();
        await this.confirmDateBooking.click();
    }

    async selectGuestInformation(habitaciones, adultos, menores, edad) {
        await this.guestInformation.click();
        if (habitaciones > 1) {
            for (let i = 0; i < habitaciones; i++) {
                await this.addRooms.click();
            }
        } else if (adultos > 2) {
            for (let f = 0; f < adultos; f++) {
                await this.addAdults.click();
            }
        } else if (menores > 0) {
            for (let g = 0; g < menores; g++) {
                await this.addChildren.click();
                await $(`android.widget.Button[text="${edad}"]`).click();
                await $('[id="android:id/button1"]');
            }
        }
        await this.buttonApply.click();
    }

    async searchHotel(destino, fecha_inicio, fecha_fin) {
        const startFormattedDate = formatearFecha(fecha_inicio);
        const endFormattedDate = formatearFecha(fecha_fin);
        const dateVerified = `${startFormattedDate} - ${endFormattedDate}`;
        await this.buttonSearch.click();
        await expect(this.validateDestination).toHaveText(destino);
        await expect(this.validateDates).toHaveText(dateVerified);
    }

    async selectProperty() {
        await this.selectOptions.click();
        await this.seeOptions.click();
        await this.selectRoom.click();
        await this.buttonReserve.click();
    }
}

module.exports = new BookingScreen();