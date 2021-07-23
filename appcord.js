const btn = document.getElementById('btn');
btn.addEventListener('click', () => {
  const fizz_num = document.getElementById('fizz_num');
  const fizz = fizz_num.value;
  const buzz_num = document.getElementById('buzz_num');
  const buzz = buzz_num.value;
  const output = document.getElementById('output');
     let cord = '';
     for (let i = 1; i < 100; i++) {
       if (i % fizz === 0 && i % buzz === 0) {
         cord = 'FizzBuzz' + ' ' + i;
        } else if (i % fizz === 0) {
         cord = 'Fizz' + ' ' + i;
        } else if (i % buzz === 0) {
         cord = 'Buzz' + ' ' + i;
        } else {
         cord = '';
        }
        const task = document.createElement('li');
        output.appendChild(task);
        task.textContent = cord;      
      }
      if (!fizz || !buzz) {
        output.innerHTML = '';
        output.innerHTML = '<p>整数値を入力してください</p>'
      } else if (fizz.match(/^\D+$/) || buzz.match(/^\D+$/)) {
        output.innerHTML = '';
        output.innerHTML = '<p>整数値を入力してください</p>'     
      } else if (fizz.match(/^-?[0-9]+\.[0-9]+$/) || buzz.match(/^-?[0-9]+\.[0-9]+$/)) {
        output.innerHTML = '';
        output.innerHTML = '<p>整数値を入力してください</p>'
      }
    }
    );

