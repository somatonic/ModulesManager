;
(function($, config) {

    var mmcat = config.process_modulesmanager_filter_cat ? "?cat=" + config.process_modulesmanager_filter_cat : '';


    $(function() {

        var aSelected = [];

        var settings = {
            "bStateSave": true,
            "bProcessing": true,
            "sPaginationType": "full_numbers",
            "bSort": true,
            "aaSorting": [
                [4, 'desc']
                // [1, 'asc']
            ],
            "sAjaxSource": config.process_modulesmanager + mmcat,
            "fnRowCallBack": function(nRow, aData, iDisplayIndex) {
                if (jQuery.inArray(aData.DT_RowId, aSelected) !== -1) {
                    $(nRow).addClass('row_selected');
                }
            }
        };

        var $datatable = $("#mm_datatable").dataTable(settings);


        /* Click event handler */
        $('#mm_datatable').on('click', 'tbody tr', function() {
            var id = this.id;
            var index = jQuery.inArray(id, aSelected);

            if (index === -1) {
                aSelected.push(id);
            } else {
                aSelected.splice(index, 1);
            }

            $(this).toggleClass('row_selected');
        });


        var is_more_link = false;

        $('#mm_datatable').on('click', 'tbody tr a:not(.nolightbox)', function(e) {

            e.preventDefault();

            is_more_link = $(this).hasClass("more_link");

            if ($(this).hasClass("confirm")) {
                var ok = confirm($(this).data("confirmtext"));
                if (ok) {

                    if (config.process_modulesmanager_lightbox == "fancybox") {
                        $(this).addClass("iframe");
                        initFancybox($(this));
                    }

                    if (config.process_modulesmanager_lightbox == "magnific") {
                        $.magnificPopup.open({
                            items: {
                                src: $(this).attr("href")
                            },
                            type: 'iframe',
                            disableOn: 0,
                            callbacks: {
                                afterClose: function() {
                                    if (!is_more_link) reloadDataTable($datatable);
                                }
                            }
                        });
                    }

                }
            } else {

                if (config.process_modulesmanager_lightbox == "fancybox") {
                    $(this).addClass("iframe");
                    initFancybox($(this));
                }

                if (config.process_modulesmanager_lightbox == "magnific") {
                    $.magnificPopup.open({
                        items: {
                            src: $(this).attr("href")
                        },
                        type: 'iframe',
                        disableOn: 0,
                        callbacks: {
                            afterClose: function() {
                                if (!is_more_link) reloadDataTable($datatable);
                            }
                        }
                    });
                }
            }


        });

        var initFancybox = function($link) {

            var h = $(window).height() - 65;
            var w = $(window).width() > 1150 ? 1150 : $(window).width() - 100;
            $link.fancybox({
                hideOnContentClick: true,
                centerOnScroll: true,
                frameWidth: w,
                frameHeight: h,
                callbackOnStart: function() {
                    $('body').css('overflow', 'hidden');
                },
                callbackOnClose: function() {
                    $('body').css('overflow', 'auto');
                    if (!is_more_link) reloadDataTable($datatable);
                }
            }).trigger('click');
        };

    });

    var reloadDataTable = function($datatable) {
        $.ajax({
            url: config.process_modulesmanager + mmcat,
            dataType: 'json',
            type: 'post',
            beforeSend: function() {
                $('#mm_datatable_processing').css('visibility', 'visible');
                $datatable.fadeTo("fast", 0.5);
            },
            success: function(data) {
                console.log(data);
                $datatable.fnClearTable();
                $datatable.fnAddData(data.aaData);
                $datatable.fadeTo("fast", 1);
                $('#mm_datatable_processing').css('visibility', 'hidden');

            }
        });
    };


})(jQuery, config);