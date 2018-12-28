$('document').ready(function () {
    //"example" in ('#example') is the table id, this is declared under table class
    $('#example').DataTable({
        "ajax": "JSON/buying-summary-2018.json",
        "dataSrc": "",
        "columns": [{
                "data": "Supplier",

            },
            {
                "data": "Item Code"
            },
            {
                "data": "Category"
            },
            {
                "data": "Qty",
                render: $.fn.dataTable.render.number(',', '.', 0, '')
            },
            {
                "data": "Amount",
                render: $.fn.dataTable.render.number(',', '.', 0, '')

            },
            {
                "data": "Min-Rate",
                render: $.fn.dataTable.render.number(',', '.', 0, '')
            }, {
                "data": "Max-Rate",
                render: $.fn.dataTable.render.number(',', '.', 0, '')
            },
            {
                "data": "Buyn Freq"
            }


        ],
        "columnDefs": [{
                "width": "15%",
                "targets": 0
            },
            {
                "width": "25%",
                "targets": 1
            }
        ],

        "dom": "Bftrip",
        //"buttons": ['excel', 'pdf', 'print']

    });

});