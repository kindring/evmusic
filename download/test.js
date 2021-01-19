let arr = [{
        id: 1,
        title: '1号'
    },
    {
        id: 3,
        title: '3号'
    },
    {
        id: 2,
        title: '2号'
    }
]

function sleep_s(m) {
    return new Promise((resolve, reject) => {
        setTimeout(resolve, m);
    });
}

function sleep(t) {
    return new Promise((resolve, reject) => {
        sleep_s(t * 1000).then(() => {
            setTimeout(resolve, t * 1000)
        })
    });
}


function test() {
    arr.forEach(async(val) => {
        await sleep(val.id).then(() => {
            console.log('--------')
        })
        console.log(val.title);
    });
    console.log('任务执行完毕')
}

// test();


let Test = {
    run: () => {
        arr.forEach(async(val) => {
            await sleep(val.id).then(() => {
                console.log('--------')
            })
            console.log(val.title);
        });
        console.log('任务执行完毕')
    }
}


// Test.run();



function fn1(t) {
    return new Promise((resolve, reject) => {
        console.log('fn1被调用')
        setTimeout(() => {
            console.log('fn1执行完成');
            resolve();
        }, t * 1000);
    });
}


function fn2(t) {
    return new Promise((resolve, reject) => {
        console.log('fn2被调用');
        fn1(t).then(() => {
            console.log('fn2执行完成');
            resolve();
        });
    });
}

async function fn3() {
    console.log('fn3执行中');
    arr.forEach(async(val) => {
        await fn1(3);
        console.log('-----');
    });



    // console.log('             ----------      ');
    // console.log('             ----------      ');
    // console.log('             ----------      ');
    // for (var i in arr) {
    //     await fn2(3);
    //     console.log('******')
    // }
    console.log('任务执行完毕')
}

fn3();