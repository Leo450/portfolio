class Anim{

    run()
    {

        this.initElems();

        window.requestAnimationFrame(() => {
            this.start();
        });

    }

    initElems()
    {

        this.elems = {
            sun: document.querySelectorAll('.trans__sun'),
            outline: document.querySelectorAll('.trans__outline:not(.trans__outline-half):not(.trans__outline-square):not(.trans__outline-dot)'),
            outline_half: document.querySelectorAll('.trans__outline-half'),
            outline_square: document.querySelectorAll('.trans__outline-square'),
            outline_dots: document.querySelectorAll('.outline-dot > div'),
            satellite: document.querySelectorAll('.trans__satellite'),
            light: document.querySelectorAll('.trans__light'),
            letter: document.querySelectorAll('.trans__letter'),
            baseline: document.querySelectorAll('.trans__baseline'),
            line: document.querySelectorAll('.line'),
            menu: document.querySelectorAll('.trans__menu'),
        };
        
        this.forAll((elems) => {
            for(const elem of elems){
                elem.style.opacity = 0;
            }
        });



        this.elems.sun[0].style.transform = 'scale(0)';

        for(const outline of this.elems.outline){
            outline.style.transform = 'scale(0)';
        }

        for(const outlineSquare of this.elems.outline_square){
            outlineSquare.style.transform = 'rotate(90deg)';
        }

        for(const letter of this.elems.letter){
            letter.style.transform = 'translateX(-2vw)';
        }

        this.elems.baseline[0].style.transform = 'translateY(1vw)';

        this.elems.line[0].style.width = 0;

    }

    start()
    {

        this.elems.sun[0].classList.add('enabled');
        this.elems.sun[0].style.opacity = 1;
        this.elems.sun[0].style.transform = 'scale(1)';

        for(const light of this.elems.light){
            light.classList.add('enabled');
            light.style.opacity = 1;
        }

        let to = 0;
        for (let i = this.elems.outline.length - 1; i >= 0; i--) {
            const outline = this.elems.outline[i];
            setTimeout(() => {
                outline.classList.add('enabled');
                outline.style.opacity = 1;
                outline.style.transform = 'scale(1)';
            }, to);
            to += 500;
        }

        to = 8000;
        for (const outlineDot of this.elems.outline_dots) {
            setTimeout(() => {
                outlineDot.classList.add('transition');
                outlineDot.style.opacity = 1;
            }, to);
            to += 25;
        }

        setTimeout(() => {
            this.elems.satellite[0].classList.add('enabled');
            this.elems.satellite[0].style.opacity = 1;
        }, 8000);

        to = 1000;
        for (const outlineSquare of this.elems.outline_square) {
            setTimeout(() => {
                outlineSquare.classList.add('enabled');
                outlineSquare.style.opacity = 1;
                outlineSquare.style.transform = 'rotate(0)';
            }, to);
            to += 1000;
        }

        to = 8000;
        for (let i = this.elems.letter.length - 1; i >= 0; i--) {
            const letter = this.elems.letter[i];
            setTimeout(() => {
                letter.classList.add('enabled');
                letter.style.opacity = 1;
                letter.style.transform = 'translateX(0)';
            }, to);
            to += 500;
        }

        setTimeout(() => {
            this.elems.baseline[0].classList.add('enabled');
            this.elems.baseline[0].style.opacity = 1;
            this.elems.baseline[0].style.transform = 'translateY(0)';
        }, 10000);

        setTimeout(() => {
            this.elems.line[0].classList.add('transition');
            this.elems.line[0].style.opacity = .2;
            this.elems.line[0].style.width = '65vw';
        }, 10000);

        setTimeout(() => {
            this.elems.menu[0].classList.add('enabled');
            this.elems.menu[0].style.opacity = 1;
        }, 11000);

    }

    forAll(func)
    {

        for(const k in this.elems){
            func(this.elems[k]);
        }

    }

}