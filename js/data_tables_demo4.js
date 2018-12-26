$('document').ready(function () {
    //"example" in ('#example') is the table id, this is declared under table class
    $('#example').DataTable({
        "ajax": "json-ajax.json",
        "dataSrc": "",
        "columns": [{
                "data": "CREATED_AT"
            },
            {
                "data": "SOURCE"
            },
            {
                "data": "NAME"
            },
            {
                "data": "CITY"
            },
            {
                "data": "BIRTH_DATE"
            },
            {
                "data": "LATITUDE"
            },
            {
                "data": "ZIP"
            },
            {
                "data": "PASSWORD"
            },
            {
                "data": "ID"
            },
            {
                "data": "LONGITUDE"
            },
            {
                "data": "ADDRESS"
            },
            {
                "data": "STATE"
            },
            {
                "data": "EMAIL"
            }
        ],
        "dom": "Bftrip",
        "buttons": ['excel', 'pdf', 'print']

    });

});