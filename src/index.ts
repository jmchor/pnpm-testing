const headlineSpace = document.getElementById('#headline-space') as HTMLDivElement;

let headline = document.createElement('h1');
headline.textContent = 'Hello World!';
headlineSpace.appendChild(headline);
