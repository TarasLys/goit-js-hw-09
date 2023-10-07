import Notiflix from 'notiflix';

const form = document.querySelector(".form");
form.addEventListener("submit", onClick)
function onClick(event) {
    event.preventDefault();
    const formData = Object.fromEntries(new FormData(event.target));

    const delay = Number(formData.delay);
    const step = Number(formData.step);
    const amount = Number(formData.amount);

    for (let i = 1; i <= amount; i++) {
        const currentDelay = delay + (i - 1) * step;
    

        createPromise(i, currentDelay)
            .then(({ position, delay }) => {
                //console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
              Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
              
            })
            .catch(({ position, delay }) => {
                //console.log(`❌ Rejected promise ${position} in ${delay}ms`);
              Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
            });
    }
}
    function createPromise(position, delay) {
        return new Promise((resolve, reject) => { 
            setTimeout(() => {
                const shouldResolve = Math.random() > 0.3;
                const result = { position, delay };
                if (shouldResolve) {
                    resolve(result);
                } else {
                    reject(result);
                }                
            }, delay);
        })
    }

