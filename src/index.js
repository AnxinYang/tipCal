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

function setupInputs(mainContainer) {
    let display = mainContainer.add('div')
        .addClass('display');

    let subTotalDiv = display.add('div', 'subTotal')
        .css({
            padding: '8px',
            fontSize: '24px',
        });
    subTotalDiv.add('strong')
        .content('Subtotal:');
    subTotalDiv.add('input')
        .attr('type', 'number')
        .addClass('mainNumber')
        .addClass('mainNumberBackground')
        .on('change', function () {
            this.prop('value',(+this.value).toFixed(2))
            cc.setValue('subtotal',  Math.abs(+this.value) )
        });

    let TotalDiv = display.add('div', 'Total')
        .css({
            padding: '8px',
            fontSize: '24px',
        });
    TotalDiv.add('strong')
        .content('Total:');
    TotalDiv.add('input')
        .attr('type', 'number')
        .addClass('mainNumber')
        .addClass('mainNumberBackground')
        .on('change', function () {
            this.prop('value',(+this.value).toFixed(2))
            cc.setValue('total', Math.abs(+this.value) )
        });

    let tipDiv = display.add('div', 'Total')
        .css({
            padding: '8px',
            fontSize: '24px',
        });
    tipDiv.add('strong')
        .content('Tip:');
    tipDiv.add('span')
        .attr('type', 'number')
        .addClass('mainNumber')
        .content('0.00')
        .bind('total', function (d) {
            let subtotal = cc.getValue('subtotal') || 0;
            let total = cc.getValue('total') || subtotal;
            let tip = (total-subtotal).toFixed(2);
            this.content(`${tip} (${(+tip*100/subtotal).toFixed(2)}%)`)
        });
}

function setupTable(mainContainer) {
    let tableDiv = mainContainer.add('div')
        .addClass('advice');
    let tipTable = tableDiv.add('table')
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

function index() {
    let root = cc.select('#body');
    let mainContainer = cc.createElement('div', 'test')
        .addClass('main-container');
    root.appendChild(mainContainer);

    mainContainer.add('h2').content('Thank you').addClass('header');

    setupInputs(mainContainer);
    setupTable(mainContainer);


}


setupSW();
index();