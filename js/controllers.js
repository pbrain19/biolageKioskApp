'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
        .controller('homeCTRL', function($scope, $location) {

            $scope.imagesets = [
                ['/set1/biolaggirl.png', '/set1/touch.png', '/set1/to.png', '/set1/enter.png', '/set1/and.png', '/set1/win.png'],
                ['/set2/biolagebottles.png', '/set2/find.png', '/set2/our.png', '/set2/designers.png', '/set2/picks.png', '/set2/see.png']


            ];
            $scope.currentIndex = 0;
            $scope.sweepstakes = function() {


            }
            $scope.change = function() {
                $scope.currentIndex = ($scope.currentIndex + 1) % 2;
            }

        })
        .controller('sweepstakesCTRL', function($scope) {
            $scope.q1 = {
                question: 'How would you describe the texture of your hair?',
                choices: [
                    {
                        title: 'ExquisiteOil Strengthening Treatment',
                        description: 'Oil infused haircare provides many benefits to all types of hair. ExquisiteOil Strengthening Treatment is formulated with Polynesian Tamanu Oil for a ultra lightweight, scented oil that strenghtens thin, fragile hair.',
                        image: 'img/products/moringa/jpg',
                        answer: 'Fine'
                    },
                    {
                        title: 'ExquisiteOil Protective Treatment',
                        description: 'Oil infused haircare provides many benefits to all types of hair. ExquisiteOil Protective Treatment is formulated with a Moringa oil blend, providing lightweight replenishment for all hair types.',
                        image: 'img/products/moringa/jpg',
                        answer: 'Medium'
                    },
                    {
                        title: 'ExquisiteOil Softening Treatment',
                        description: 'Oil infused haircare provides many benefits to all types of hair. ExquisiteOil Softening Treatment is formulated with Tahitian Monoi, an exotic oil blend of Gardenia and Coconut, combining to make a rich, scented oil that provides ultimate softness to thick, coarse hair.',
                        image: 'img/products/monoi.jpg',
                        answer: 'Coarse'
                    }
                ]};

            $scope.q2 = {
                q: 'Is your hair currently color treated?  ',
                choices: ['Yes', 'No']

            };

            $scope.q3 = {
                q: 'What is your primary hair concern?',
                choices: [
                    {
                        title: 'HYDRASOURCE Detangling Solution',
                        description: 'Dry hair can be prone to breakage and lacks manageability and shine. Inspired by the aloe plant that never seems to dry, Biolage HYDRASOURCE Detangling solution for dry hair helps optimize moisture balance for healthy looking hair. ',
                        image: 'img/products/hydrasource.jpg',
                        answer: 'Lack of Moisture'

                    }, {
                        title: 'VOLUMEBLOOM Shampoo',
                        description: "Fine hair lacks volume and can be difficult to style. Inspired by nature's expanding cotton flower, Biolage VOLUMEBLOOM Shampoo plumps fine hair with long-lasting bouncy volume.Give her hair 70% more volume after just one application*.",
                        image: 'img/products/volumebloom.jpg',
                        answer: 'Lack of Volume'

                    }, {
                        title: 'Color Last',
                        description: 'Forget about de-saturated color. These state-of-the-art formulas and color-treated hair care products, inspired by nature, help protect hair, balance moisture and even out the hair’s surface for saturated, shiny, vibrant color that stays truer.',
                        image: 'img/products/colorlast.jpg',
                        answer: 'Protecting color'

                    }, {
                        title: 'SMOOTHPROOF',
                        description: "Suelta el cabello encrespado y el volumen no deseado con las fórmulas más modernas inspiradas por la naturaleza que imitan las propiedades de la flor camelia que resiste el agua.  Las formulas trabajan para encapsular al cabello y alinear la cutícula para evitar la entrada de la humedad para mejor control y suavidad hasta en tiempo de 97% de humedad. Cuando se usa el sistema del champú, acondicionador y suero SMOOTHPROOF vs. un champú no acondicionador.",
                        image: 'img/products/smoothproof.jpg',
                        answer: 'Protecting color'
                    }
                ]
            };
            $scope.q4 = {
                q: 'What do you need when styling?',
                choices: ['More Shine', 'More Control', 'Heat Tool Protection', 'More Definition']
            };


            $scope.a4 = [
                {
                    intent: 'More Shine',
                    hairStyle: 'Fine',
                    products: [
                        {
                            title: 'Shine Milk',
                            description: 'Lightweight mist with features that add softening, strengthening, and conditioning. Adds glossy shine and smoothes and controls flyaways.',
                            img: 'img/products/shinemilk.jpg'

                        }

                    ]

                },
                {
                    intent: 'More Shine',
                    hairStyle: 'Medium',
                    products: [
                        {
                            title: 'Shine Milk',
                            description: 'Lightweight mist with features that add softening, strengthening, and conditioning. Adds glossy shine and smoothes and controls flyaways.',
                            img: 'img/products/shinemilk.jpg'
                        },
                        {
                            title: 'Thermal Active Repair Gloss',
                            description: 'Lightweight serum that helps provide high-temperature protection for illuminating shine. Protects hair from heat styling. ',
                            img: 'img/products/repairgloss.jpg'
                        }

                    ]

                }, {
                    intent: 'More Shine',
                    hairStyle: 'Coarse',
                    products: [
                        {
                            title: 'Shine Milk',
                            description: 'Lightweight mist with features that add softening, strengthening, and conditioning. Adds glossy shine and smoothes and controls flyaways.',
                            img: 'img/products/shinemilk.jpg'
                        },
                        {
                            title: 'Thermal Active Repair Gloss',
                            description: 'Lightweight serum that helps provide high-temperature protection for illuminating shine. Protects hair from heat styling. ',
                            img: 'img/products/repairgloss.jpg'
                        }

                    ]

                },
                {
                    intent: 'More Control',
                    hairStyle: 'Fine',
                    products: [
                        {
                            title: 'Freeze Fix Anti-Humidity Hairspray',
                            description: 'The ultimate humidity-resistant, water-free fast-dry spray that lifts and locks styles into place with all-day firm and aerial support. Provides firm-hold for an all-day hold. ',
                            img: 'img/products/freezefix.jpg'
                        },
                        {
                            title: 'Complete Control Fast-Drying Hairspray',
                            description: 'A fast-drying hairspray that delivers adjustable control while adding body and volume to finish any natural looking style. Soft- to medium-hold formula leaves hair flexible and natural-looking. ',
                            img: 'img/products/completecontrol.jpg'
                        },
                        {
                            title: 'Whipped Mousse',
                            description: 'Lightweight mousse with a whipped crème texture that provides body, control and shine. Leaves hair with bounce and natural softness.',
                            img: 'img/products/whippedmousse.jpg'
                        }

                    ]

                },
                {
                    intent: 'More Control',
                    hairStyle: 'Medium',
                    products: [
                        {
                            title: 'Freeze Fix Anti-Humidity Hairspray',
                            description: 'The ultimate humidity-resistant, water-free fast-dry spray that lifts and locks styles into place with all-day firm and aerial support. Provides firm-hold for an all-day hold. ',
                            img: 'img/products/freezefix.jpg'
                        },
                        {
                            title: 'Complete Control Fast-Drying Hairspray',
                            description: 'A fast-drying hairspray that delivers adjustable control while adding body and volume to finish any natural looking style. Soft- to medium-hold formula leaves hair flexible and natural-looking. ',
                            img: 'img/products/completecontrol.jpg'
                        },
                        {
                            title: 'Whipped Mousse',
                            description: 'Lightweight mousse with a whipped crème texture that provides body, control and shine. Leaves hair with bounce and natural softness.',
                            img: 'img/products/whippedmousse.jpg'
                        },
                        {
                            title: 'Finishing Spritz',
                            description: 'The ultimate humidity-resistant, water-free fast-dry spray that lifts and locks styles into place with all-day firm and aerial support.  Provides firm-hold for an all-day hold. ',
                            img: 'img/products/finishingspritz.jpg'
                        }

                    ]

                },
                {
                    intent: 'More Control',
                    hairStyle: 'Coarse',
                    products: [
                        {
                            title: 'Freeze Fix Anti-Humidity Hairspray',
                            description: 'The ultimate humidity-resistant, water-free fast-dry spray that lifts and locks styles into place with all-day firm and aerial support. Provides firm-hold for an all-day hold. ',
                            img: 'img/products/freezefix.jpg'
                        },
                        {
                            title: 'Complete Control Fast-Drying Hairspray',
                            description: 'A fast-drying hairspray that delivers adjustable control while adding body and volume to finish any natural looking style. Soft- to medium-hold formula leaves hair flexible and natural-looking. ',
                            img: 'img/products/completecontrol.jpg'
                        },
                        {
                            title: 'Finishing Spritz',
                            description: 'The ultimate humidity-resistant, water-free fast-dry spray that lifts and locks styles into place with all-day firm and aerial support.  Provides firm-hold for an all-day hold. ',
                            img: 'img/products/finishingspritz.jpg'
                        }

                    ]

                }, {
                    intent: 'More Volume',
                    hairStyle: 'Fine',
                    products: [
                        {
                            title: 'Blow-In Control',
                            description: 'A cream that adds body and conditioning to hair for a controlled finish that is soft to the touch. Provides pure hold that controls styles all day. Pure nourishment maintains hairs integrity.',
                            img: 'img/products/blowcontrol.jpg'
                        },
                        {
                            title: 'Hydra Foaming Styler',
                            description: 'A conditioning mousse that provides medium hold to add body and natural movement to any style. Gives body and natural movement to any style. Has UV filters. ',
                            img: 'img/products/hydrafoaming.jpg'
                        },
                        {
                            title: 'Whipped Mousse',
                            description: 'Lightweight mousse with a whipped crème texture that provides body, control and shine. Leaves hair with bounce and natural softness.',
                            img: 'img/products/whippedmousse.jpg'
                        }

                    ]

                }, {
                    intent: 'More Volume',
                    hairStyle: 'Medium',
                    products: [
                        {
                            title: 'Blow-In Control',
                            description: 'A cream that adds body and conditioning to hair for a controlled finish that is soft to the touch. Provides pure hold that controls styles all day. Pure nourishment maintains hairs integrity.',
                            img: 'img/products/blowcontrol.jpg'
                        },
                        {
                            title: 'Hydra Foaming Styler',
                            description: 'A conditioning mousse that provides medium hold to add body and natural movement to any style. Gives body and natural movement to any style. Has UV filters. ',
                            img: 'img/products/hydrafoaming.jpg'
                        },
                        {
                            title: 'Whipped Mousse',
                            description: 'Lightweight mousse with a whipped crème texture that provides body, control and shine. Leaves hair with bounce and natural softness.',
                            img: 'img/products/whippedmousse.jpg'
                        }

                    ]

                }, {
                    intent: 'More Volume',
                    hairStyle: 'Coarse',
                    products: [
                        {
                            title: 'Blow-In Control',
                            description: 'A cream that adds body and conditioning to hair for a controlled finish that is soft to the touch. Provides pure hold that controls styles all day. Pure nourishment maintains hairs integrity.',
                            img: 'img/products/blowcontrol.jpg'
                        }

                    ]

                }, {
                    intent: 'Heat Tool Protection',
                    hairStyle: 'Fine',
                    products: [
                        {
                            title: 'Thermal Active Repair Cream',
                            description: 'Lightweight leave-in conditioning repair cream with light hold. Helps protect against split-ends and breakage as it reinforces the hair fiber. ',
                            img: 'img/products/thermalrepair.jpg'
                        },
                        {
                            title: 'Thermal Active Setting Spray',
                            description: 'Non-aerosol, thermal styling, protection spray. Protects hair against heat styling while adding body and volume for long-lasting control. ',
                            img: 'img/products/thermalsetting.jpg'
                        }

                    ]

                }, {
                    intent: 'Heat Tool Protection',
                    hairStyle: 'Medium',
                    products: [
                        {
                            title: 'Thermal Active Repair Cream',
                            description: 'Lightweight leave-in conditioning repair cream with light hold. Helps protect against split-ends and breakage as it reinforces the hair fiber. ',
                            img: 'img/products/thermalrepair.jpg'
                        },
                        {
                            title: 'Thermal Active Setting Spray',
                            description: 'Non-aerosol, thermal styling, protection spray. Protects hair against heat styling while adding body and volume for long-lasting control. ',
                            img: 'img/products/thermalsetting.jpg'
                        },
                        {
                            title: 'Thermal Active Repair Gloss',
                            description: 'Lightweight serum that helps provide high-temperature protection for illuminating shine. Protects hair from heat styling. ',
                            img: 'img/products/repairgloss.jpg'
                        }

                    ]

                }, {
                    intent: 'Heat Tool Protection',
                    hairStyle: 'Coarse',
                    products: [
                        {
                            title: 'Thermal Active Repair Cream',
                            description: 'Lightweight leave-in conditioning repair cream with light hold. Helps protect against split-ends and breakage as it reinforces the hair fiber. ',
                            img: 'img/products/thermalrepair.jpg'
                        },
                        {
                            title: 'Thermal Active Setting Spray',
                            description: 'Non-aerosol, thermal styling, protection spray. Protects hair against heat styling while adding body and volume for long-lasting control. ',
                            img: 'img/products/thermalsetting.jpg'
                        },
                        {
                            title: 'Thermal Active Repair Gloss',
                            description: 'Lightweight serum that helps provide high-temperature protection for illuminating shine. Protects hair from heat styling. ',
                            img: 'img/products/repairgloss.jpg'
                        }

                    ]

                }, {
                    intent: 'More Definition',
                    hairStyle: 'Fine',
                    products: [
                        {
                            title: 'Agave Nectar',
                            description: 'A gel that maintains shape memory style while controlling frizz. Pure hold that controls styles all day. Pure nourishment maintains hairs integrity.',
                            img: 'img/products/agave.jpg'
                        }

                    ]

                }, {
                    intent: 'More Definition',
                    hairStyle: 'Medium',
                    products: [
                        {
                            title: 'Agave Nectar',
                            description: 'A gel that maintains shape memory style while controlling frizz. Pure hold that controls styles all day. Pure nourishment maintains hairs integrity.',
                            img: 'img/products/agave.jpg'
                        },
                        {
                            title: 'Curl Defining Elixir',
                            description: 'Natural texture-enhancing gel with medium hold that delivers lasting curl control to create beautiful, shiny curls. Provides frizz-free natural movement and shine without stiffness or weight. ',
                            img: 'img/products/curlelixir.jpg'
                        },
                        {
                            title: 'Gelée',
                            description: 'All-purpose gel that is ideal for all hair types to add body, shine and control. ',
                            img: 'img/products/gelee.jpg'
                        },
                        {
                            title: 'Pliable Paste Matte Texturizer',
                            description: 'Molds texture and volume into hair for a matte finish that keeps its shape. Pure hold that controls styles all day. Pure nourishment maintains hairs integrity. ',
                            img: 'img/products/pliablepaste.jpg'
                        }

                    ]

                }, {
                    intent: 'More Definition',
                    hairStyle: 'Coarse',
                    products: [
                        {
                            title: 'Curl Defining Elixir',
                            description: 'Natural texture-enhancing gel with medium hold that delivers lasting curl control to create beautiful, shiny curls. Provides frizz-free natural movement and shine without stiffness or weight. ',
                            img: 'img/products/curlelixir.jpg'
                        },
                        {
                            title: 'Gelée',
                            description: 'All-purpose gel that is ideal for all hair types to add body, shine and control. ',
                            img: 'img/products/gelee.jpg'
                        },
                        {
                            title: 'Pliable Paste Matte Texturizer',
                            description: 'Molds texture and volume into hair for a matte finish that keeps its shape. Pure hold that controls styles all day. Pure nourishment maintains hairs integrity. ',
                            img: 'img/products/pliablepaste.jpg'
                        }

                    ]

                }
            ];





            $scope.designers = [
                'AILEEN',
                'ALICIA',
                'AMANDA',
                'ANNA',
                'BRIANNE',
                'CARMEN',
                'CATHERINE',
                'CINDY',
                'CJ',
                'DAINA',
                'DANIELLE',
                'DENEEN',
                'DIANE',
                'DINA',
                'ELAINE',
                'ELIZABETH',
                'ERIKA',
                'FABI',
                'HEATHER Associate',
                'HEATHER RECEPTIONIST',
                'JACKIE',
                'JASMINE',
                'JENNIFER esthetician',
                'JENNIFER IRIZARRY',
                'JENNIFER LOPRETE',
                'JENNIFER MAHARAJ',
                'JESS',
                'JESSE',
                'JESSICA LEE',
                'KATHLEEN',
                'KATRINA',
                'KRISTEN',
                'KRISTY',
                'KRYS V',
                'LAURA',
                'LEIGH',
                'LENA',
                'LISA M STYLIST',
                'LISA MARIE',
                'LUCIA',
                'LUCY',
                'MAGDA',
                'MARIA',
                'MARIE',
                'MARK',
                'MARY',
                'MELISSA',
                'MICHELLE STYLIST',
                'MICHELLE  Guest Services',
                'MILLIE',
                'REBECCA',
                'RENEE',
                'RICH',
                'ROSSIO',
                'SAM GIASI',
                'SAM JANN',
                'SHANICE',
                'SHANNON',
                'SHARENE Massage Ther',
                'SHERINNE',
                'STEFANIE STYLIST',
                'STEPHANIE   MASSAGE THER',
                'TERESA',
                'TIFFANY',
                'TINA',
                'VANESSA',
                'VINNY',
                'ZITA'

            ];



        });
