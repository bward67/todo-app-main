So there are a lot of negatives in my code here but there are also a lot of positives which I will focus on and celebrate. I look forward to laughing hystericallly at this code once I become a much better Front End Developer.

These are things I could not do .. yet:

The space between the items-left & All, Active, Completed on the mobile version is not perfect, and quite frankly, a bit hacky. I even tried inverting a border-radius on the div which I called mobile-spacer to make it work but I wasn't able to make it work.

The challenge didn't ask us to be able to uncheck a todo item BUT of course we must be able to for a proper user experience and even though I tried using toggle - I just couldn't figure it out. Someday I will!

Then it was just the filtering of the All, Active and Completed which I just could not figure out - even though I created an array of the added todo items but I couldn't figure out how to separate the checked from the not checked items. Someday I will!

Now for the things I did manage to do:

I used display grid to make the transition from mobile to desktop work on the bottom of the list container.

In order to get the form in JS, I used document.form.addEventListener which works when you give your element a "name" in your HTML. I learned that from Wes Bos in his JS30.

I set up an if statement so that if there were only 1 item left it would read it in singular: 1 item left and not 1 item(s) left.

Getting the white checkmark to show up on the dark theme was a struggle and I used position: absolute with a newly created svg (which I removed the white color from) to make it work.

I love using JS to switch from the moon to the sun with the src so that I don't have to even place the sun into my HTML.

So even though overall I am slightly disappointed in myself - I will hold my head high and remember the massive amount of things I have learned on this amazing journey so far. I lot done/learned... more to do/learn!
