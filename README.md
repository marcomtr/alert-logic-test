Demo at [https://marcomtr.github.io/alert-logic-test/!](https://marcomtr.github.io/alert-logic-test/) 

#Why did I did I build this?

Since I don't have a lot of code available on GitHub to showcase my front-end dev skills I decided to make myself a challenge and create a GitHub page with Jekyll.


#What is it about?

A contact form is used inconsistently throughout the website. See screenshots below:

![picture](assets/img/screenshot-home.png)
![picture](assets/img/screenshot-landing-1.png)
![picture](assets/img/screenshot-landing-2.png)

#Why does it matter?

Inconsistency is a key principle of UX design which benefits the user and also the code base. 

#How did I solve this?

With the help of Jekyll and Bootstrap I created a modular form that can be used differently using the same form blocks.

    {% include form-name.html %}
    {% include form-company.html %}
    {% include form-contact-details.html %}
    {% include form-country.html %}
    {% include form-additional-info.html %}


The blocks can be used to build a stacked form 
![picture](assets/img/screenshot-long-form.png)

    <h1>Get started</h1>

    {% include form-name.html %}
    {% include form-company.html %}
    {% include form-contact-details.html %}
    {% include form-country.html %}
    {% include form-additional-info.html %}

    <button type="submit" class="btn btn--block btn--primary">Contact Us</button>


... or a multi-step form
![picture](assets/img/screenshot-multi-step-form.png)


    <div class="multi-step">

        <div class="multi-step__item multi-step__item--is-active js-step-wrapper">
		
            <header class="multi-step__header">
                <p class="multi-step__count">Step 1 of 5</p>
                <h1 class="h4">Let's start with your name</h1>
            </header>

            <main class="multi-step__content">
                {% include form-name.html %}
            </main>
		
            <footer class="multi-step__footer">
                <button type="button" class="btn btn--block btn--primary js-next-step">Next</button>
            </footer>
        </div>
    </div>
    