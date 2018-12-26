$('document').ready(function () {
    //"example" in ('#example') is the table id, this is declared under table class
    $('#example').DataTable({
        "ajax": "JSON/supplier-details.json",
        "dataSrc": "",
        "columns": [{
                "data": "Supplier"
            },
            {
                "data": "Item Code"
            },
            {
                "data": "Category"
            },
            {
                "data": "T-QTY"
            },
            {
                "data": "T-Amount"
            },
            {
                "data": "Min-Rate"
            },
            {
                "data": "Buy-Freq"
            }


        ],
        "dom": "Bftrip",
        //"buttons": ['excel', 'pdf', 'print']

    });

});