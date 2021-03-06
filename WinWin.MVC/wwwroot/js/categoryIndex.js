
$(document).ready(function () {
    $('#categoriesTable').DataTable({
        dom:
            "<'row'<'col-sm-3'l><'col-sm-6 text-center'B><'col-sm-3'f>>" +
            "<'row'<'col-sm-12'tr>>" +
            "<'row'<'col-sm-5'i><'col-sm-7'p>>",
        buttons: [
            {
                text: 'Ekle',
                attr: {
                    id: 'btnAdd'
                },
                className: 'btn btn-success',
                action: function (e, dt, node, config) {

                }
            },
            {
                text: 'Yenile',
                className: 'btn btn-info',
                action: function (e, dt, node, config) {
                    $.ajax({
                        type: 'GET',
                        url: 'Category/GetAllCategories/',
                        contentType: "application/json",
                        beforeSend: function () {
                            $('#categoriesTable').hide();
                            $('.spinner-border').show();

                        },
                        success: function (data) {
                            const categoryListDto = jQuery.parseJSON(data);
                            console.log(categoryListDto);
                            if (categoryListDto.ResultStatus === 0) {
                                let tableBody = "";
                                $.each(categoryListDto.Categories.$values, function (index, category) {
                                    tableBody += `
                                             <tr>
                                            <td>${category.Id}</td>
                                            <td>${category.Name}</td>
                                            <td>${category.Description}</td>
                                            <td>${convertFirstLetterToUpperCase(category.IsActive.toString())}</td>
                                            <td>${convertFirstLetterToUpperCase(category.IsDeleted.toString())}</td>
                                            <td>${category.CreatedByName}</td>
                                            <td>${convertToShortDate(category.CreatedOn)}</td>
                                            <td>${category.ModifiedByName}</td>
                                            <td>${convertToShortDate(category.ModifiedOn)}</td>
                                            <td>${category.Note}</td>
                                            <td>
                                                <button class="btn btn-primary btn-sm btn-block btn-update"  data-id="${category.Id}" data-update="${category.Id}"><span class="fas fa-edit"></span> Düzenle</button>
                                                <button class="btn btn-danger btn-sm btn-block btn-delete" data-id="${category.Id}"><span class="fas fa-minus-circle"></span> Sil</button>
                                            </td>
                                        </tr>`;
                                });
                                $('#categoriesTable > tbody').replaceWith(tableBody);
                                $('.spinner-border').hide();
                                $('#categoriesTable').fadeIn(2500);


                            } else {
                                toastr.warning(categoryListDto.Message);
                                $('.spinner-border').hide();
                            }
                        },
                        error: function (err) {
                            toastr.warning(err.statusText.toString());
                            $('.spinner-border').hide();
                            $('#categoriesTable').fadeIn(1000);
                        }

                    });
                }
            }
        ],
        language: {
            "emptyTable": "Tabloda herhangi bir veri mevcut değil",
            "info": "_TOTAL_ kayıttan _START_ - _END_ arasındaki kayıtlar gösteriliyor",
            "infoEmpty": "Kayıt yok",
            "infoFiltered": "(_MAX_ kayıt içerisinden bulunan)",
            "infoThousands": ".",
            "lengthMenu": "Sayfada _MENU_ kayıt göster",
            "loadingRecords": "Yükleniyor...",
            "processing": "İşleniyor...",
            "search": "Ara:",
            "zeroRecords": "Eşleşen kayıt bulunamadı",
            "paginate": {
                "first": "İlk",
                "last": "Son",
                "next": "Sonraki",
                "previous": "Önceki"
            },
            "aria": {
                "sortAscending": ": artan sütun sıralamasını aktifleştir",
                "sortDescending": ": azalan sütun sıralamasını aktifleştir"
            },
            "select": {
                "rows": {
                    "_": "%d kayıt seçildi",
                    "1": "1 kayıt seçildi"
                },
                "cells": {
                    "1": "1 hücre seçildi",
                    "_": "%d hücre seçildi"
                },
                "columns": {
                    "1": "1 sütun seçildi",
                    "_": "%d sütun seçildi"
                }
            },
            "autoFill": {
                "cancel": "İptal",
                "fillHorizontal": "Hücreleri yatay olarak doldur",
                "fillVertical": "Hücreleri dikey olarak doldur",
                "fill": "Bütün hücreleri <i>%d<\/i> ile doldur"
            },
            "buttons": {
                "collection": "Koleksiyon <span class=\"ui-button-icon-primary ui-icon ui-icon-triangle-1-s\"><\/span>",
                "colvis": "Sütun görünürlüğü",
                "colvisRestore": "Görünürlüğü eski haline getir",
                "copySuccess": {
                    "1": "1 satır panoya kopyalandı",
                    "_": "%ds satır panoya kopyalandı"
                },
                "copyTitle": "Panoya kopyala",
                "csv": "CSV",
                "excel": "Excel",
                "pageLength": {
                    "-1": "Bütün satırları göster",
                    "_": "%d satır göster"
                },
                "pdf": "PDF",
                "print": "Yazdır",
                "copy": "Kopyala",
                "copyKeys": "Tablodaki veriyi kopyalamak için CTRL veya u2318 + C tuşlarına basınız. İptal etmek için bu mesaja tıklayın veya escape tuşuna basın."
            },
            "searchBuilder": {
                "add": "Koşul Ekle",
                "button": {
                    "0": "Arama Oluşturucu",
                    "_": "Arama Oluşturucu (%d)"
                },
                "condition": "Koşul",
                "conditions": {
                    "date": {
                        "after": "Sonra",
                        "before": "Önce",
                        "between": "Arasında",
                        "empty": "Boş",
                        "equals": "Eşittir",
                        "not": "Değildir",
                        "notBetween": "Dışında",
                        "notEmpty": "Dolu"
                    },
                    "number": {
                        "between": "Arasında",
                        "empty": "Boş",
                        "equals": "Eşittir",
                        "gt": "Büyüktür",
                        "gte": "Büyük eşittir",
                        "lt": "Küçüktür",
                        "lte": "Küçük eşittir",
                        "not": "Değildir",
                        "notBetween": "Dışında",
                        "notEmpty": "Dolu"
                    },
                    "string": {
                        "contains": "İçerir",
                        "empty": "Boş",
                        "endsWith": "İle biter",
                        "equals": "Eşittir",
                        "not": "Değildir",
                        "notEmpty": "Dolu",
                        "startsWith": "İle başlar"
                    },
                    "array": {
                        "contains": "İçerir",
                        "empty": "Boş",
                        "equals": "Eşittir",
                        "not": "Değildir",
                        "notEmpty": "Dolu",
                        "without": "Hariç"
                    }
                },
                "data": "Veri",
                "deleteTitle": "Filtreleme kuralını silin",
                "leftTitle": "Kriteri dışarı çıkart",
                "logicAnd": "ve",
                "logicOr": "veya",
                "rightTitle": "Kriteri içeri al",
                "title": {
                    "0": "Arama Oluşturucu",
                    "_": "Arama Oluşturucu (%d)"
                },
                "value": "Değer",
                "clearAll": "Filtreleri Temizle"
            },
            "searchPanes": {
                "clearMessage": "Hepsini Temizle",
                "collapse": {
                    "0": "Arama Bölmesi",
                    "_": "Arama Bölmesi (%d)"
                },
                "count": "{total}",
                "countFiltered": "{shown}\/{total}",
                "emptyPanes": "Arama Bölmesi yok",
                "loadMessage": "Arama Bölmeleri yükleniyor ...",
                "title": "Etkin filtreler - %d"
            },
            "thousands": ".",
            "datetime": {
                "amPm": [
                    "öö",
                    "ös"
                ],
                "hours": "Saat",
                "minutes": "Dakika",
                "next": "Sonraki",
                "previous": "Önceki",
                "seconds": "Saniye",
                "unknown": "Bilinmeyen",
                "weekdays": {
                    "6": "Paz",
                    "5": "Cmt",
                    "4": "Cum",
                    "3": "Per",
                    "2": "Çar",
                    "1": "Sal",
                    "0": "Pzt"
                },
                "months": {
                    "9": "Ekim",
                    "8": "Eylül",
                    "7": "Ağustos",
                    "6": "Temmuz",
                    "5": "Haziran",
                    "4": "Mayıs",
                    "3": "Nisan",
                    "2": "Mart",
                    "11": "Aralık",
                    "10": "Kasım",
                    "1": "Şubat",
                    "0": "Ocak"
                }
            },
            "decimal": ",",
            "editor": {
                "close": "Kapat",
                "create": {
                    "button": "Yeni",
                    "submit": "Kaydet",
                    "title": "Yeni kayıt oluştur"
                },
                "edit": {
                    "button": "Düzenle",
                    "submit": "Güncelle",
                    "title": "Kaydı düzenle"
                },
                "error": {
                    "system": "Bir sistem hatası oluştu (Ayrıntılı bilgi)"
                },
                "multi": {
                    "info": "Seçili kayıtlar bu alanda farklı değerler içeriyor. Seçili kayıtların hepsinde bu alana aynı değeri atamak için buraya tıklayın; aksi halde her kayıt bu alanda kendi değerini koruyacak.",
                    "noMulti": "Bu alan bir grup olarak değil ancak tekil olarak düzenlenebilir.",
                    "restore": "Değişiklikleri geri al",
                    "title": "Çoklu değer"
                },
                "remove": {
                    "button": "Sil",
                    "confirm": {
                        "_": "%d adet kaydı silmek istediğinize emin misiniz?",
                        "1": "Bu kaydı silmek istediğinizden emin misiniz?"
                    },
                    "submit": "Sil",
                    "title": "Kayıtları sil"
                }
            }
        }
    });/*Datatable end here*/

    $(function () {
        const url = 'Category/Add/';
        const placeHolderDiv = $('#modalPlaceHolder');

        $('#btnAdd').click(function () {
            $.get(url).done(function (data) {
                placeHolderDiv.html(data);
                placeHolderDiv.find(".modal").modal('show');
            });

        });

        placeHolderDiv.on('click', '#btn-save', function (event) {
            event.preventDefault();
            const form = $('#form-category-add');
            const actionUrl = form.attr('action');
            const dataToSend = form.serialize();
            $.post(actionUrl, dataToSend).done(function (data) {
                const categoryAddAjaxModel = jQuery.parseJSON(data);
                const newFormBody = $('.modal-body', categoryAddAjaxModel.CategoryAddPartial);
                placeHolderDiv.find('.modal-body').replaceWith(newFormBody);
                const IsValid = newFormBody.find('[name="IsValid"]').val() === 'True';
                if (IsValid) {
                    placeHolderDiv.find('.modal').modal('hide');
                    const newTableRow = `
    <tr>
        <td>${categoryAddAjaxModel.CategoryDto.Category.Id}</td>
        <td>${categoryAddAjaxModel.CategoryDto.Category.Name}</td>
        <td>${categoryAddAjaxModel.CategoryDto.Category.Description}</td>
        <td>${convertFirstLetterToUpperCase(categoryAddAjaxModel.CategoryDto.Category.IsActive.toString())}</td>
        <td>${convertFirstLetterToUpperCase(categoryAddAjaxModel.CategoryDto.Category.IsDeleted.toString())}</td>
        <td>${categoryAddAjaxModel.CategoryDto.Category.CreatedByName}</td>
        <td>${convertToShortDate(categoryAddAjaxModel.CategoryDto.Category.CreatedOn)}</td>
        <td>${categoryAddAjaxModel.CategoryDto.Category.ModifiedByName}</td>
        <td>${convertToShortDate(categoryAddAjaxModel.CategoryDto.Category.ModifiedOn)}</td>
        <td>${categoryAddAjaxModel.CategoryDto.Category.Note}</td>
        <td>
            <button class="btn btn-primary btn-sm btn-block btn-update" data-id="${categoryAddAjaxModel.CategoryDto.Category.Id}" data-update="${categoryAddAjaxModel.CategoryDto.Category.Id}"><span class="fas fa-edit"></span> Düzenle</button>
            <button class="btn btn-danger btn-sm btn-block btn-delete" data-id="${categoryAddAjaxModel.CategoryDto.Category.Id}"><span class="fas fa-minus-circle"></span> Sil</button>
        </td>
    </tr>`;
                    const newTabloRowObject = $(newTableRow);
                    newTabloRowObject.hide();
                    $('#categoriesTable').append(newTabloRowObject);
                    newTabloRowObject.fadeIn(3500);
                    toastr.success(`${categoryAddAjaxModel.CategoryDto.Message}`, 'Başarılı İşlem!')
                } else {
                    let summuryText = "";
                    $('#validation-summary > ul > li').each(function () {
                        let text = $(this).text();
                        summuryText = `*${text}\n`;
                    });
                    toastr.warning(summuryText);
                }
            });

        });

    });

    $(document).on('click', '.btn-delete', function (event) {
        event.preventDefault();
        const id = $(this).attr('data-id');
        const tabloRow = $(`[name="${id}"]`);
        const categoryName = tabloRow.find('td:eq(1)').text();
        Swal.fire({
            title: 'Silmek istediğinize emin misin?',
            text: categoryName + " kategori silinecektir!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Evet, Silmek istiyorum',
            cancelButtonText: "Hayır silmek istemiyorum"
        }).then((result) => {
            if (result.isConfirmed) {
                $.ajax({
                    type: 'POST',
                    dataType: 'json',
                    data: { categoryId: id },
                    url: 'Category/Delete/',
                    success: function (data) {
                        const categoryDto = jQuery.parseJSON(data);
                        if (categoryDto.ResultStatus === 0) {
                            Swal.fire(
                                'Silindi!',
                                'Kategori silinmiştir.',
                                'success'
                            );

                            tabloRow.fadeOut(2000);
                        } else {
                            Swal.fire(
                                'hata!',
                                'hata.',
                                'warning'
                            );
                        }
                    },
                    error: function (err) {
                        console.log(err);
                        toastr.warning(err);
                    },

                });
            }
        });
    });



    $(function () {
        const url = 'Category/Update';
        const placeHolderDiv = $('#modalPlaceHolder');

        $(document).on('click', '.btn-update', function (event) {
         
            event.preventDefault();
            const id = $(this).attr('data-id');
            $.get(url, { categoryID: id })
                .done(function (data) {
                    placeHolderDiv.html(data);
                    placeHolderDiv.find('.modal').modal('show');
                })
                .fail(function () {
                    toastr.error("Hata oluştu");
                 });

        });

        /*ajax update post */

        $(document).on('click', '#btnUpdate', function (event) {
            event.preventDefault();
            const form = $('#form-category-update');
            const actionUrl = form.attr('action');
            const dataToSend = form.serialize();
            $.post(actionUrl, dataToSend).done(function (data) {
                const categoryUpdateAjaxModel = jQuery.parseJSON(data);
                console.log(data);
                const newFromBody = $('.modal-body', categoryUpdateAjaxModel.CategoryUpdatePartial);
                placeHolderDiv.find('.modal-body').replaceWith(newFromBody);

                const IsValid = newFromBody.find('[name="IsValid"]').val() === 'True';
                if (IsValid) {
                    placeHolderDiv.find('.modal').hide();
                    const newTableRow = `
                    <tr  name="${categoryUpdateAjaxModel.CategoryDto.Category.Id}">
                        <td>${categoryUpdateAjaxModel.CategoryDto.Category.Id}</td>
                        <td>${categoryUpdateAjaxModel.CategoryDto.Category.Name}</td>
                        <td>${categoryUpdateAjaxModel.CategoryDto.Category.Description}</td>
                        <td>${convertFirstLetterToUpperCase(categoryUpdateAjaxModel.CategoryDto.Category.IsActive.toString())}</td>
                        <td>${convertFirstLetterToUpperCase(categoryUpdateAjaxModel.CategoryDto.Category.IsDeleted.toString())}</td>
                        <td>${categoryUpdateAjaxModel.CategoryDto.Category.CreatedByName}</td>
                        <td>${convertToShortDate(categoryUpdateAjaxModel.CategoryDto.Category.CreatedOn)}</td>
                        <td>${categoryUpdateAjaxModel.CategoryDto.Category.ModifiedByName}</td>
                        <td>${convertToShortDate(categoryUpdateAjaxModel.CategoryDto.Category.ModifiedOn)}</td>
                        <td>${categoryUpdateAjaxModel.CategoryDto.Category.Note}</td>
                        <td>
                            <button class="btn btn-primary btn-sm btn-block btn-update" data-id="${categoryUpdateAjaxModel.CategoryDto.Category.Id}" data-update="${categoryUpdateAjaxModel.CategoryDto.Category.Id}"><span class="fas fa-edit"></span> Düzenle</button>
                            <button class="btn btn-danger btn-sm btn-block btn-delete" data-id="${categoryUpdateAjaxModel.CategoryDto.Category.Id}"><span class="fas fa-minus-circle"></span> Sil</button>
                        </td>
                    </tr>`;
                    const newTableRowObject = $(newTableRow);
                    const categoryTableRow = $(`[name=${categoryUpdateAjaxModel.CategoryDto.Category.Id}]`);
                    newTableRowObject.hide(); 
                    categoryTableRow.replaceWith(newTableRowObject);
                    categoryTableRow.fadeIn(2500);
                    toastr.success('Başarılı');
                } else {
                    toastr.success('hatalı');
                }

            }).fail(function (response) {
                console.log(response);
            });

        });


    });


});

