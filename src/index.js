import cc from './ccjs/cc';


cc.setValue('viewport', {width: window.innerWidth, height: window.innerHeight});
window.addEventListener('resize', function () {
    cc.updateValue('viewport', {width: window.innerWidth, height: window.innerHeight});
});


function setupSW() {
    if('serviceWorker' in navigator) {
        console.log('Service worker supported!');
        try {
            navigator.serviceWorker.register('service.js');
            console.log('Service worker registered.')
        } catch (e) {
            console.log('Service worker failed to register. - WTH!?')
        }
    }else{
        console.log('Service worker not supported! - Dude, buy a new phone.')
    }
}

function index() {
    let root = cc.select('#body');
    let mainContainer = cc.createElement('div', 'test')
        .addClass('main-container');
    root.appendChild(mainContainer);

    let display = mainContainer.add('div')
        .addClass('display');
    let subTotalDiv = display.add('div', 'subTotal')
        .css({
            padding: '16px 8px 4px',
            fontSize: '30px',
            borderBottom: '1px dashed #555',
        });
    subTotalDiv.add('strong')
        .content('Subtotal:');
    subTotalDiv.add('input')
        .attr('type', 'number')
        .css({
            float: 'right',
            textAlign: 'right',
            fontWeight: 'bold',
            background: '#ddd',
            border: 'none',
            padding: '0 4px',
            fontSize: '24px',
            width: '50%'
        })
        .on('change', function () {
            this.prop('value',(+this.value).toFixed(2))
            cc.setValue('subtotal',  Math.abs(+this.value) )
        });

    let TotalDiv = display.add('div', 'Total')
        .css({
            padding: '16px 8px 4px',
            fontSize: '30px',
            borderBottom: '1px dashed #555',
        });
    TotalDiv.add('strong')
        .content('Total:');
    TotalDiv.add('input')
        .attr('type', 'number')
        .css({
            float: 'right',
            textAlign: 'right',
            fontWeight: 'bold',
            background: '#ddd',
            border: 'none',
            padding: '0 4px',
            fontSize: '24px',
            width: '50%'
        })
        .on('change', function () {
            this.prop('value',(+this.value).toFixed(2))
            cc.setValue('total', Math.abs(+this.value) )
        });

    let tipDiv = display.add('div', 'Total')
        .css({
            padding: '16px 8px 4px',
            fontSize: '30px',
            borderBottom: '1px dashed #555',
        });
    tipDiv.add('strong')
        .content('Tip:');
    tipDiv.add('span')
        .attr('type', 'number')
        .css({
            float: 'right',
            textAlign: 'right',
            fontWeight: 'bold',
            background: '#ddd',
            border: 'none',
            padding: '0 4px',
            fontSize: '24px',
            width: '50%'
        })
        .content('0.00')
        .bind('total', function (d) {
            let subtotal = cc.getValue('subtotal') || 0;
            let total = cc.getValue('total') || subtotal;
            let tip = (total-subtotal).toFixed(2);
            this.content(`${tip} (${(+tip*100/subtotal).toFixed(2)}%)`)
        });


    let tipTable = display.add('table')
        .css({
            width: '100%'
        });
    let tipRange = [8, 25];
    let header = tipTable.add('tr');
    header.add('th').content('Percentage').css({
        textAlign: 'center',
        width: '100px'
    });
    header.add('th').content('Tip').css({
        textAlign: 'center',
        width: 'calc(50% - 50px)'
    });
    header.add('th').content('Total').css({
        textAlign: 'center',
        width: 'calc(50% - 50px)'
    });
    for(let i = tipRange[0]; i<=tipRange[1]; i++){
        let tipRow =  tipTable.add('tr');
        tipRow.add('td')
            .content(`${i}%`)
            .css({
                textAlign: 'center'
            });
        tipRow.add('td')
            .css({
                textAlign: 'center'
            })
            .bind('subtotal', function (d) {
                this.content((d*i/100).toFixed(2))
            });
        tipRow.add('td')
            .css({
                textAlign: 'center'
            })
            .bind('subtotal', function (d) {
                this.content((d+(d*i/100)).toFixed(2))
            })
    }

}


setupSW();
index();