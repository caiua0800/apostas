function _0x3020() {
    const _0x5626eb = ['pagamento', '3392416oDXOSY', 'corSorteada', 'textContent', 'Entrar no Preto', 'random', 'Gerar Entrada', '4705640jXDFuA', '3UjxDUB', '6wcmNOk', '1430zkfOmd', 'click', '2029972wiTHKy', 'porcentagem', 'Entrar no Foguinho', 'floor', 'removeAttribute', '1157486wvrRfD', '1863695hekobq', 'double-result', 'innerHTML', 'cor', 'src', './teste/utils/Foguinho.mp4', 'setAttribute', 'getElementById', '697436ghMVUr', 'preto', 'generate-opportunity', '130149FNHoWN', 'addEventListener', '.mp4', 'disabled', 'Verificando mapa de calor', 'foguinho'];
    _0x3020 = function () {
        return _0x5626eb;
    };
    return _0x3020();
}
const _0x44abfc = _0x3987;
(function (_0x40f7ff, _0x3942da) {
    const _0x3cfb21 = _0x3987, _0x7233f8 = _0x40f7ff();
    while (!![]) {
        try {
            const _0x3f6b42 = -parseInt(_0x3cfb21(0x146)) / 0x1 + -parseInt(_0x3cfb21(0x13d)) / 0x2 * (parseInt(_0x3cfb21(0x134)) / 0x3) + -parseInt(_0x3cfb21(0x150)) / 0x4 + -parseInt(_0x3cfb21(0x13e)) / 0x5 + parseInt(_0x3cfb21(0x135)) / 0x6 * (parseInt(_0x3cfb21(0x138)) / 0x7) + parseInt(_0x3cfb21(0x133)) / 0x8 + parseInt(_0x3cfb21(0x149)) / 0x9 * (parseInt(_0x3cfb21(0x136)) / 0xa);
            if (_0x3f6b42 === _0x3942da) break; else _0x7233f8['push'](_0x7233f8['shift']());
        } catch (_0x207f3f) {
            _0x7233f8['push'](_0x7233f8['shift']());
        }
    }
}(_0x3020, 0x6da4e));

function realizarSorteio() {
    const _0x2539d1 = _0x3987, _0x3e713f = [{ 'cor': _0x2539d1(0x14e), 'porcentagem': 0xa, 'pagamento': 0x20 }, { 'cor': _0x2539d1(0x147), 'porcentagem': 0x28, 'pagamento': 0x2 }, { 'cor': 'vermelho', 'porcentagem': 0x32, 'pagamento': 0x2 }], _0x519f8f = Math['floor'](Math[_0x2539d1(0x154)]() * 0x64) + 0x1;
    let _0x985281, _0x2e71ee = 0x0;
    for (const _0x3725cd of _0x3e713f) {
        const _0x15d419 = _0x2e71ee + _0x3725cd[_0x2539d1(0x139)];
        if (_0x519f8f > _0x2e71ee && _0x519f8f <= _0x15d419) {
            _0x985281 = _0x3725cd[_0x2539d1(0x141)];
            break;
        }
        _0x2e71ee = _0x15d419;
    }
    let _0x5e3f7b = 0x0;
    for (const _0x187878 of _0x3e713f) {
        if (_0x985281 === _0x187878[_0x2539d1(0x141)]) {
            _0x5e3f7b = _0x187878[_0x2539d1(0x14f)];
            break;
        }
    }
    return { 'corSorteada': _0x985281, 'pagamento': _0x5e3f7b };
}

function handleDouble() {
    const _0x32eaa7 = _0x3987;
    const _0x4eaa3d = document[_0x32eaa7(0x145)](_0x32eaa7(0x13f));
    const _0x17e31f = realizarSorteio();
    const _0x2df3e8 = Math[_0x32eaa7(0x13b)](Math[_0x32eaa7(0x154)]() * 0x3);

    if (!_0x4eaa3d) {
        console.error("Element with id 'double-result' not found.");
        return;
    }

    console.log(_0x2df3e8);
    if (_0x17e31f[_0x32eaa7(0x151)] === _0x32eaa7(0x147)) {
        _0x4eaa3d[_0x32eaa7(0x144)](_0x32eaa7(0x142), './teste/utils/Preto' + _0x2df3e8 + _0x32eaa7(0x14b));
        setTimeout(() => {
            alert(_0x32eaa7(0x153));
        }, 0x1194);
    }
    if (_0x17e31f[_0x32eaa7(0x151)] === 'vermelho') {
        _0x4eaa3d['setAttribute']('src', './teste/utils/Vermelho' + _0x2df3e8 + _0x32eaa7(0x14b));
        setTimeout(() => {
            alert('Entrar no Vermelho');
        }, 0x1194);
    }
    if (_0x17e31f[_0x32eaa7(0x151)] === _0x32eaa7(0x14e)) {
        _0x4eaa3d[_0x32eaa7(0x144)](_0x32eaa7(0x142), _0x32eaa7(0x143));
        setTimeout(() => {
            alert(_0x32eaa7(0x13a));
        }, 0x1194);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document[_0x44abfc(0x145)](_0x44abfc(0x148))[_0x44abfc(0x14a)](_0x44abfc(0x137), () => {
        init();
        handleDouble();
    });
});

function _0x3987(_0x592e44, _0x1a3d5b) {
    const _0x302086 = _0x3020();
    return _0x3987 = function (_0x3987d1, _0x354836) {
        _0x3987d1 = _0x3987d1 - 0x133;
        let _0x597982 = _0x302086[_0x3987d1];
        return _0x597982;
    }, _0x3987(_0x592e44, _0x1a3d5b);
}

function init() {
    let _0xa3242 = 0xf;
    const _0x3ed334 = setInterval(() => {
        const _0x3040c3 = _0x3987;
        _0xa3242--;
        if (_0xa3242 <= 0x1) {
            document.getElementById(_0x3040c3(0x148)).textContent = _0x3040c3(0x155);
            document.getElementById('generate-opportunity').removeAttribute(_0x3040c3(0x14c));
            clearInterval(_0x3ed334);
            return;
        }
        document.getElementById(_0x3040c3(0x148)).textContent = 'Aguarde ' + _0xa3242 + ' segundos';
        document.getElementById(_0x3040c3(0x148)).setAttribute(_0x3040c3(0x14c), '');
    }, 0x3e8);
    setTimeout(() => {
        const _0x3b1526 = _0x3987;
        statusElement[_0x3b1526(0x152)] = _0x3b1526(0x14d);
    }, 0x1388);
}

let go_to_file = document.querySelector("#go-to-file");

go_to_file.addEventListener('click', () => {
    window.open('./planilha.html', '_blank');
})