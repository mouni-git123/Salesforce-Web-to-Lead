function beforesubmit() {
    let datepicker = document.getElementById('date-of-birth');
    let hiddendate = document.getElementById('date-of-birth--c');

    let formattedDate = new Date(datePicker.value).toLocaleDateString("en-us");
    hiddenDate.value = formattedDate;

    }
