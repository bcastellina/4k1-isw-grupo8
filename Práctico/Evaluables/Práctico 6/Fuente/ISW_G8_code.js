//Ingeniería de Software - Grupo 8 - 4K1 - 2020
//Implementación de US: "Realizar pedido a comercio adherido"

//Convenciones
// - Para la indentación se utilizarán tabulaciones (cada tabulación se corresponde a 4 espacios)

var module = angular.module( "DeliverEat" , [] );

module.run( function( $rootScope ) {
    //Datos de comercios
    $rootScope.comercios = [
        {
            id: 1,
            razon_social: "Comercio S.A.",
            fantasia: "Todo en un solo lugar",
            logo: "https://image.freepik.com/vector-gratis/diseno-logotipo-supermercado-lema-tienda_23-2148458443.jpg",
            categorias: [
                {
                    id: 0, nombre: "Bebidas", productos: [
                        { 
                            id: 0, 
                            nombre: "Coca Cola 500ml", 
                            precio: 45,
                            imagen: "https://http2.mlstatic.com/coca-cola-500cc-y-saboressuper-preciozona-norte-D_NQ_NP_734779-MLA31618646463_072019-Q.jpg"
                        },
                        { 
                            id: 1, 
                            nombre: "Coca Cola Zero 500 ml", 
                            precio: 50, 
                            imagen: "https://ardiaprod.vteximg.com.br/arquivos/ids/167051-1000-1000/Coca-Cola-Zero-500-Ml-_1.jpg?v=637232238557430000"
                        },
                        { 
                            id: 2, 
                            nombre: "Coca Cola 1.5 Lts.", 
                            precio: 130,
                            imagen: "https://www.bmart.com.ar/img/articulos/gaseosa_coca_cola_en_botella_x_1500_m_pack_x_6_imagen1.jpg" 
                        },
                        { 
                            id: 3, 
                            nombre: "Coca Cola Zero 1500ml", 
                            precio: 150, 
                            imagen: "https://www.bmart.com.ar/img/articulos/gaseosa_coca_cola_zero_en_botella_x_1500_ml_pack_x_6_imagen1.jpg"
                        },
                        { 
                            id: 4, 
                            nombre: "Fanta Naranja 500 ml", 
                            precio: 40,
                            imagen: "https://www.facilshops.com/static/stores/s730_cz1b/images/products/xl/fanta-naranja-s-azucar-gaseosa-en-botella-x-500-ml-pack-contiene-6-unidades-_13930.png" 
                        },
                        { 
                            id: 5, 
                            nombre: "Fanta Naranja Zero 500 ml",
                            precio: 45, 
                            imagen: "https://www.casa-segal.com/wp-content/uploads/2020/03/fanta-naranja-500ml-cero-azucares-almacen-gaseosas-casa-segal-mendoza.jpg"  
                        },
                        { 
                            id: 6, 
                            nombre: "Fanta Uva 500ml", 
                            precio: 45, 
                            imagen: "https://i.ebayimg.com/images/g/3jcAAOSwAZxc1D7t/s-l300.jpg" 
                        },
                        { 
                            id: 7, 
                            nombre: "Fanta Uva Zero 500ml", 
                            precio: 50, 
                            imagen: "https://www.japonshop.com/med/img/productos/prd-fanta-uva-zero-botella-japonshop.webp"  
                        },
                        { 
                            id: 8, 
                            nombre: "Fanta Naranja 1500 ml",
                            precio: 100, 
                            imagen: "https://www.bmart.com.ar/img/articulos/gaseosa_fanta_en_botella_x_1500_ml_pack_x_6_imagen1.jpg"  
                        }
                    ]
                },
                {
                    id: 1, nombre: "Snacks", productos: [
                        { 
                            id: 9, 
                            nombre: "Saladix Jamón", 
                            precio: 55, 
                            imagen: "https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/2140083_f.jpg" 
                        },
                        { 
                            id: 10, 
                            nombre: "Saladix Pizza", 
                            precio: 55, 
                            imagen: "https://www.ofiflex.com.ar/wp-content/uploads/Saladix-Pizza-en-Caja-Arcor-4x6x100g-500x500.jpg"
                        },
                        { 
                            id: 11, 
                            nombre: "Doritos Parmesano",
                            precio: 55, 
                            imagen: "https://cdn11.bigcommerce.com/s-3stx4pub31/images/stencil/1280x1280/products/688/1889/SALADIXPARMESANO__07159.1568291851.jpg?c=2?imbypass=on" 
                        },
                        { 
                            id: 12, 
                            nombre: "Saladix Duo", 
                            precio: 60, 
                            imagen: "https://arcorencasa.com/wp-content/uploads/2020/07/20200722-1003746.png" 
                        },
                        { 
                            id: 13, 
                            nombre: "Doritos Queso", 
                            precio: 55, 
                            imagen: "https://supermercado.carrefour.com.ar/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/7/7/7790310006917_11.jpg" 
                        },
                        { 
                            id: 14, 
                            nombre: "Doritos Nacho", 
                            precio: 55, 
                            imagen: "https://www.superama.com.mx/Content/images/products/img_large/0750101116761L.jpg" 
                        },
                        { 
                            id: 15, 
                            nombre: "Saladix BBQ", 
                            precio: 60, 
                            imagen: "https://doritos.es/images/default-source/default-album/bbq-thumbnail.png?sfvrsn=0" 
                        },
                        { 
                            id: 16, 
                            nombre: "Saladix Chilli Heatwave", 
                            precio: 65, 
                            imagen: "https://digitalcontent.api.tesco.com/v2/media/ghs/acd6652b-c429-4db1-9bd9-58486c13790e/snapshotimagehandler_1147964248.jpeg?h=540&w=540" 
                        },
                        { 
                            id: 17, 
                            nombre: "Doritos BBQ Heatwave", 
                            precio: 65, 
                            imagen: "https://ipcdn.freshop.com/resize?url=https://images.freshop.com/00028400648882/89a6e8ccf19ee8a023fadde568f6b4a0_large.png&width=512&type=webp&quality=40" 
                        }
                    ]
                },
                {
                    id: 2, nombre: "Lácteos", productos: [
                        { 
                            id: 18, 
                            nombre: "Yogurt Yogurísimo Vainilla 1 lt", 
                            precio: 82, 
                            imagen: "https://www.drdieta.com.ar/img/vademecum/59dee2a13c642.jpg" },
                        { 
                            id: 19, 
                            nombre: "Yogurt Yogurísimo Vainilla Firme 120 gr", 
                            precio: 45, 
                            imagen: "https://www.laserenisimavaatucasa.com.ar/wp-content/uploads/2020/07/7791337002869.png" 
                        },
                        { 
                            id: 20, 
                            nombre: "Yogurt Yogurísimo Vainilla Cremix 120 gr", 
                            precio: 48, 
                            imagen: "https://www.laserenisimavaatucasa.com.ar/wp-content/uploads/2020/07/7791337002821.png" 
                        },
                        { 
                            id: 21, 
                            nombre: "Yogurt Yogurísimo Frutilla 1 lt", 
                            precio: 82, 
                            imagen: "https://www.pasosonline.com.ar/wp-content/uploads/2020/07/7791337650824_02.jpg" 
                        },
                        { 
                            id: 22, 
                            nombre: "Yogurt Yogurísimo Frutilla Firme 120 g", 
                            precio: 45, 
                            imagen: "https://supermercado.carrefour.com.ar/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/7/7/7791337651227_02.jpg" 
                        },
                        { 
                            id: 23, 
                            nombre: "Yogurt Yogurísimo Frutilla Cremix 120 gr", 
                            precio: 48, 
                            imagen: "https://www.laserenisimavaatucasa.com.ar/wp-content/uploads/2020/07/7791337002838.png" 
                        },
                        { 
                            id: 24, 
                            nombre: "Yogurt Yogurísimo Durazno Cremix 120 gr", 
                            precio: 82, 
                            imagen: "https://supermercado.carrefour.com.ar/media/catalog/product/cache/1/image/1000x/040ec09b1e35df139433887a97daa66f/7/7/7791337999831_02.jpg"
                        },
                        { 
                            id: 25, 
                            nombre: "Yogurt Yogurísimo Manzana y Pera Firme 120 g", 
                            precio: 45, 
                            imagen: "https://dev.laserenisimavaatucasa.com.ar/wp-content/uploads/2020/06/7791337001909-1.png" 
                        },
                        { 
                            id: 26, 
                            nombre: "Yogurt Yogurísimo Manzana Rallada Cremix 120 gr", 
                            precio: 48, 
                            imagen: "https://geant.vteximg.com.br/arquivos/ids/244913-1000-1000/242031.jpg?v=637172843750830000" 
                        }
                    ]
                },
                {
                    id: 3, nombre: "Golosinas", productos: [
                        { 
                            id: 27, 
                            nombre: "Chocolate Águila Negro Barra 150 gr", 
                            precio: 95, 
                            imagen: "https://d26lpennugtm8s.cloudfront.net/stores/602/902/products/aguila-1501-8e62d083d1d46bfe6b15398959494502-640-0.png" 
                        },
                        { 
                            id: 28, 
                            nombre: "Chocolate Aguila Barra 60% Cacao", 
                            precio: 125, 
                            imagen: "https://d26lpennugtm8s.cloudfront.net/stores/602/902/products/aguila-601-2d54a6746026e45a0715918232923521-1024-1024.jpg" 
                        },
                        { 
                            id: 29, 
                            nombre: "Chocolate Águila Barra Blanco 150 gr", 
                            precio: 105, 
                            imagen: "https://statics.dinoonline.com.ar/imagenes/full_600x600_ma/2160213_f.jpg" 
                        },
                        { 
                            id: 30, 
                            nombre: "Menthoplus Menta", 
                            precio: 30, 
                            imagen: "https://www.arcor.com/ar/uploads/product_images/3a3a07c26bb26024b57a3ae9288443c0.jpg" 
                        },
                        { 
                            id: 31, 
                            nombre: "Menthoplus Cereza", 
                            precio: 30, 
                            imagen: "https://www.staac.com.ar/web/image/product.template/35159/image" 
                        },
                        { 
                            id: 32, 
                            nombre: "Menthoplus Miel", 
                            precio: 30, 
                            imagen: "https://http2.mlstatic.com/menthoplus-miel-x24unidades-kiosco-full7x24-D_NQ_NP_806170-MLA43239382439_082020-F.jpg" 
                        },
                        { 
                            id: 33, 
                            nombre: "Menthoplus Ácido Black Cherry", 
                            precio: 35, 
                            imagen: "https://media.enfasis.com/adjuntos/146/imagenes/000/073/0000073465.jpg" 
                        },
                        { 
                            id: 34, 
                            nombre: "Menthoplus Ácido Manzana", 
                            precio: 35, 
                            imagen: "https://www.newoffice.com.ar/facturacion/assets/uploads/9de7c796378ea32379c3b0991ca44d85.jpg" 
                        },
                        { 
                            id: 35, 
                            nombre: "Menthoplus Ácido menta Naranja", 
                            precio: 35, 
                            imagen: "https://images.rappi.com.ar/products/1105325-1586295115568.png?d=500x500" 
                        }
                    ]
                },
                {
                    id: 4, nombre: "Sandwiches", productos: [
                        { 
                            id: 36, 
                            nombre: "Miga Simple de Jamón y Queso", 
                            precio: 40, 
                            imagen: "https://http2.mlstatic.com/48-sandwich-de-miga-simples-de-jamon-o-queso-D_NQ_NP_966676-MLA25580398023_052017-F.jpg" 
                        },
                        { 
                            id: 37, 
                            nombre: "Miga Triple de Jamón y Queso", 
                            precio: 50, 
                            imagen: "https://www.compraensanjuan.com/fotos_articulos/1208590_1.jpg" 
                        },
                        { 
                            id: 38, 
                            nombre: "Miga de Verdura",
                            descripcion: "Sandwich de miga simple con lechuga, tomate y queso", 
                            precio: 45, 
                            imagen: "https://i.pinimg.com/originals/67/a6/9b/67a69b6d316638d6241005d25d254c5e.jpg" 
                        },
                        { 
                            id: 39, 
                            nombre: "Miga de Pollo y Verdura", 
                            precio: 60, 
                            imagen: "https://i.ytimg.com/vi/qOfIFOLyqrI/maxresdefault.jpg" 
                        },
                        { 
                            id: 40, 
                            nombre: "Miga Negro de Jamón y Queso", 
                            precio: 50, 
                            imagen: "https://supermercado.carrefour.com.ar/media/catalog/product/7/7/7794167004355_02.jpg" 
                        },
                        { 
                            id: 41, 
                            nombre: "Miga Negro de Jamón, Queso y Verdura", 
                            precio: 55, 
                            imagen: "https://img-global.cpcdn.com/recipes/1c55c67e5bee02f6/751x532cq70/sandwich-de-miga-foto-principal.jpg" 
                        },
                        { 
                            id: 42, 
                            nombre: "Miga de Zanahoria", 
                            descripcion: "Zanahoria, huevo, mayonesa casera y queso",
                            precio: 40, 
                            imagen: "https://t1.rg.ltmcdn.com/es/images/2/6/7/img_sandwich_de_miga_con_zanahoria_59762_orig.jpg" 
                        },
                        { 
                            id: 43, 
                            nombre: "Miga de Ternera", 
                            precio: 50, 
                            imagen: "https://images-gmi-pmc.edge-generalmills.com/dc402a5e-8aab-49de-86ec-30beac96a1c7.jpg" 
                        },
                        { 
                            id: 44, 
                            nombre: "Miga de Queso y Verdura", 
                            precio: 70, 
                            imagen: "https://cdn.cienradios.com/wp-content/uploads/sites/4/2020/01/sandwich-de-miga.jpg" 
                        }
                    ]
                }
            ]
        }
    ];

    //Variable para manejar la visualización de los div
    $rootScope.estado = "LA";
});

module.controller( "pedidoComercioAdherido" , function ( $scope, $rootScope ) {
    //Setear el comercio seleccionado y mostrado
    $scope.comercioSeleccionado = $rootScope.comercios[0];
    //Artículos en el carrito actual
    $scope.carritoActual = [];
    $scope.cantidadArticulosCarrito = 0;
    $scope.costoCarrito = 0;

    $scope.obtenerProductos = function () {
        let prod = [];
        $scope.comercioSeleccionado.categorias.forEach( cat => { 
            Array.prototype.push.apply( prod, cat.productos); 
        });
        return prod;
    }

    $scope.addToCart = ( product ) => {
        //Verifico si el producto ya está agregado en el carrito
        let existe_producto = null;
        for ( i = 0; i < $scope.carritoActual.length; i++ ) {
            if ( $scope.carritoActual[i].item.id === product.id ) {
                existe_producto = $scope.carritoActual[i];
                break;
            }
        }
        
        if ( existe_producto == null ) {
            let add_product = {
                item: product,
                quant: 1
            }
            $scope.carritoActual.push( add_product );
        }
        else {
            existe_producto.quant = existe_producto.quant + 1; 
        }
        
        //Actualizo los contadores
        $scope.costoCarrito = $scope.obtenerImporteCarrito();
        $scope.cantidadArticulosCarrito = $scope.carritoActual.length;
    };

    $scope.modifyProduct = function ( product, new_quantity ) {
        for ( i = 0; i < $scope.carritoActual.length; i++ ) {
            if ( $scope.carritoActual[i] === product ) {
                if ( !new_quantity ) {
                    let index = $scope.carritoActual.indexOf( product );
                    $scope.carritoActual.splice( index, 1 );
                }
                else {
                    $scope.carritoActual[i].quant = new_quantity;
                }
                break;
            }
        }

        //Actualizo los contadores
        $scope.costoCarrito = $scope.obtenerImporteCarrito();
        $scope.cantidadArticulosCarrito = $scope.carritoActual.length;
    }

    $scope.mostrarCarrito = function () {
        window.scrollTo(0,0);
        $rootScope.estado = "MR";
    }

    $scope.ocultarCarrito = function (){
        $rootScope.estado = "LA";
    }

    $scope.obtenerImporteCarrito = function ()
    {
        let importe = 0;
        $scope.carritoActual.forEach(art => {
            importe += art.item.precio * art.quant
        });
        return importe;
    }

    $scope.confirmCart = () => {
        $rootScope.$emit( "startCheckout", $scope.comercioSeleccionado, $scope.carritoActual );
    }

    //Función para retornar desde el checkout al carrito
    $rootScope.$on( "showCommerce", function ( event, resultado, comercio, carrito ){
        //Seteo la variable global de manejo de ventanas
        $rootScope.estado = "LA";
        
        //Cargo los datos traido del checkout para trazabilidad
        $scope.comercioSeleccionado = comercio;
        
        //Valido el resultado del checkout
        if ( resultado ) {
            $scope.carritoActual = [];
        }
        else {
            $scope.carritoActual = carrito;
        }
        $scope.costoCarrito = $scope.obtenerImporteCarrito();
        $scope.cantidadArticulosCarrito = $scope.carritoActual.length;
    })
});

module.controller("checkout", function ( $scope, $http, $rootScope ) {
    //Datos del carrito de compras
    $scope.comercio;
    $scope.carrito;
    $scope.montoCarrito;
    /*El objeto datosEntrega contiene la información sobre la forma y el lugar de entrega del pedido
    direccion = objeto con ciudad, dirección y referencia 
    tipo = objeto que indica el momento en que se hace la entrega
            Si es "lo antes posible" es {value: "antesposible"}
            Si es "Programado" es {value: "programado", datos: {dia: 'dia', hora: 'hora' }}*/
    $scope.datosEntrega = { 
                            direccion: {}, 
                            tipo: { 
                                    value: "antesposible",
                                    datos: {}
                                }
                        };
    //formaPago indica la forma de pago y los detalles del mismo
    //value: "cash" o "card", data: {} 
    //En caso de cash -> data: { cantidad }
    //En caso de card -> data: hace referencia a objeto $scope.card_details                                                                                              
    $scope.formaPago = { 
                        value: "cash"
                    }; 
    //Formato del objeto card_details
    //number = número de tarjeta, expiration = fecha de expiración, owner = titular de la tarjeta, cvv = código de seguridad
    //red = Red de la Tarjeta (visa mastercard amex), banco = banco al que pertenece la tarjeta
    $scope.card_details = {};         
    //Objeto result contiene el resultado de la evaluación del BIN de la tarjeta
    $scope.result;
    
    $scope.confirmarCheckout = function () {
        $rootScope.estado = "PC";
    }

    let validateBIN = async function ( text )
    {
        let url = "https://lookup.binlist.net/" + text;
        return new Promise( ( resolve, reject ) => {
            $http.get( url ).then( function ( response ) {
                resolve( { 
                    valid: true, 
                    data: { 
                        bin: text, 
                        longitud: response.data.number.length, 
                        red: response.data.scheme, 
                        tipo: response.data.type, 
                        categoria: response.data.brand, 
                        banco: response.data.bank.name 
                    } 
                } );
            }, function ( error ) {
                resolve( { 
                    valid: false, 
                    message: "Invalid BIN", 
                    details: error 
                } );
            });
        });
    }

    //Función para restringir y únicamente permitir números en un campo
    $scope.validarNumero = ( $event, expiration = false ) => {
        if ( isNaN ( String.fromCharCode( $event.keyCode ) ) ) {
            if ( expiration && $event.keyCode === 47 ) {
                return;
            }
            $event.preventDefault();
        }
    };
    
    $scope.validarExpiracion = function () {
        //Valido que sea una fecha válida
        let result_regx = new RegExp( "((0[1-9])|(1[0-2]))\/[0-9]{4}" ).test( $scope.card_details.expiration );
        
        if ( result_regx ) {
            let mes = $scope.card_details.expiration.substr( 0, 2 ),
                año = $scope.card_details.expiration.substr( 3, 4 ),
                fecha_actual = new Date();
            
            if ( new Date( año, mes - 1, fecha_actual.getDate() ) < fecha_actual ) {
                $scope.formPago.expiration.$setValidity( "required", false);
            }
            $scope.formPago.expiration.$setValidity( "required", true);
        }
        else {
            $scope.formPago.expiration.$setValidity( "required", false);
        }
    }

    $scope.validarImporteEfectivo = function () {
        if ( ( $scope.formaPago.data.cantidad ?? -1 ) < $scope.montoCarrito) {
            $scope.formPago.cantidad.$setValidity( "required", false);
        }
        else {
            $scope.formPago.cantidad.$setValidity( "required", true);
        }
    }

    $scope.validarFechaProgramada = function() {
        let min_day = $scope.datosEntrega.tipo.datos.hora * 30,
            hour = Math.trunc(min_day / 60),
            minute = ((min_day / 60) - hour).toFixed(2)*60;
        if ($scope.datosEntrega.tipo.datos.dia.setHours(hour, minute) < new Date()) {
            $scope.formEntrega.fechaEntrega.$setValidity( "required", false);
            $scope.formEntrega.horaEntrega.$setValidity( "required", false);
        }
        else {
            $scope.formEntrega.fechaEntrega.$setValidity( "required", true);
            $scope.formEntrega.horaEntrega.$setValidity( "required", true);
        }
    }

    $scope.changePAN = () => {
        if ( typeof $scope.card_details.number !== undefined && $scope.card_details.number.length === 6 ) {
            validateBIN( $scope.card_details.number ).then( res => { 
                $scope.result = {
                    valid: res.valid && res.data.red === "visa",
                    data: res.valid ? res.data : res.message
                }
                $scope.card_details.red = res.data.red;
                $scope.card_details.banco = res.data.banco;
                //Valido que la tarjeta sea efectivamente visa
                if ( !$scope.result.valid ) {
                    $scope.formPago.cardNumber.$setValidity( "required", true);
                }
                else {
                    $scope.formPago.cardNumber.$setValidity( "required", false);
                }

                console.log( $scope.result );
            });
        }
    }

    $scope.changeExpiration = ( $event ) => {
        //Aplico formato mm/aaaa
        //Keycode 8 es la tecla de borrar
        if ( $scope.card_details.expiration.length === 2 && $event.keyCode !== 8 ) {
            $scope.card_details.expiration += "/";
        }
        
        if ( $scope.card_details.expiration.length === 4 && $event.keyCode === 8 ) {
            $scope.card_details.expiration = $scope.card_details.expiration.slice( 0, -1 );
        }        
    }

    $scope.obtenerImporteCarrito = function ()
    {
        let importe = 0;
        $scope.carrito.forEach (art => {
            importe += art.item.precio * art.quant
        });
        return importe;
    }

    $scope.programandoEntrega = function () {
        $scope.datosEntrega.tipo.datos.dia = new Date();
    }

    $scope.setFormaPago = function ( fp ) {
        $scope.formaPago.value = fp;
    }

    $scope.confirmFP = function () {
        if ( $scope.formaPago.value === 'card' ) {
            $scope.formaPago.data = $scope.card_details;
        }
    }

    $scope.confirmCheckout = function () {
        $rootScope.estado = 'PC';
    }

    //La siguiente función es llamada desde el carrito para iniciar el checkout de cobro
    $rootScope.$on( "startCheckout" , function ( event, comercio, carrito ) {
        //Guardo los datos traídos del otro controlador
        $scope.comercio = comercio;
        $scope.carrito = carrito;
        $scope.montoCarrito = $scope.obtenerImporteCarrito();

        //Inicializo los valores de las variables
        $scope.card_details = {};
        $scope.result;
        
        //Defino el status para actualizar la pantalla
        $rootScope.estado = "MC";
    });

    //La siguiente función es utilizada para volver al carrito
    $scope.volverComercio = function( resultadoCheckout )
    {
        $rootScope.$emit( "showCommerce", resultadoCheckout, $scope.comercio, $scope.carrito );
    }
});