$(document).ready(function() {
    $('.carousel-imagens').slick({
        autoplay: true,
    });

    $('.menu-hamburguer').click(function() {
        $('nav').slideToggle();
    })

    $('#telefone').mask('(00) 00000-0000')

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true
            },
            mensagem: {
                required: true
            },
            veiculoInteresse: {
                required: false
            }
        },
        messages: {
            nome: 'Nome obrigatório',

            email: 'E-mail obrigatório', 
            telefone: 'Telefone obrigatório',

            mensagem: 'Mensagem necessária'
        },
        submitHanler: function(form) {
            console.log(form)
        },
        invalidHandler: function(evento, validador) {
            let composIncorretos = validador.numberOfInvalids();
            if (composIncorretos) {
                alert(`Existem ${composIncorretos} campos incorretos`)
            }
        }
    })

    $('.lista-veiculos button').click(function() {
        const destino = $('#contato');
        const nomeVeiculo = $(this).parent().find('h3').text();

        $('#veiculo-interesse').val(nomeVeiculo);

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)
    })
})