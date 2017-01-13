window.IconeMouseFollower = {

	div: null,

	icon: {

		normal:		"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABSUlEQVRYw+1WUbLDIAhkZ3IjvVPP1DvZM+37SOwQgopJXr7KTCcMUlkUVkRiQvP1bN5aa31aKCJkSbS6/fZ0DwiiAFiSXBXkzyHuIg8KS9IgngfgyQ/AowC2+8fvCmYBsB6fxwUt+10AOBPU9ngE2BItHr1ZJRSW9LWfPYkIFZOkAAhlZ0/BYUHMgmSV7wOj9f1js/OpfsrnWhes+8nhNPTav7chgMPxs6TVbkB4vmcAAMAwvQpiUCe0tRcrQrORLrRo5esu0cV4igkjHeBek9OqOENEdz5IeCq4N44Nh9CJYbPr1+OB9gSsiWSgj/xGZOQG99jt7K/HiIt35xECmSWvKSIy/Xp5FO8lgwZT9SqWAR5AdM9l8nkm30WQs3jsyHdZ9Vem2gu3jGQ7wwbC2kb/88CEMt6y8oK079bxxysfYmIm8zsZuSp/15VifRfajQYAAAAASUVORK5CYII=",

		whenClick:	"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAA7EAAAOxAGVKw4bAAABx0lEQVRYw71X0a2DMAz0SV2gs5QR0hHSEWCFjtAV6Ah9IzxGgFV4I/h9lCDHpEnakFqqiALqHeeLbUB+sFiDvhAIgCNAphopCeYB83jaPtxMu5PQBDgEXJOEl4IUeA0SSIFffwzd7EBEROfrkX5vf5JEMRHkvL0Gds+er0cahqGIxCFTbkKz3WdmAlAvBQ7E21sA5f6yh11NGAKXgO7thQqokgINqpUoAdcEgGZ6aUathlKL9zqWzOOJvasKeU/8dusFazV0x02cdy/Gvl3XTXf/uCYg0A2h+wGayQNUoNS3z+e6e3mFZJkKJ/XYtzz2rSe7C2stU4VYgSSwBK1NgCR4CFSassSIhyIHAzT2reeHzBSjmIACR+YRf6tueCmQ0geMmV1jRA3J84B2v9vv2+w/2hQvtzbGMHJy5s65jOXMJ+uKrCV6jWaKeoCttfR4PJ6NSPWI7h5sycHcvqqmKfNwbOBYy/VC4kVr3rZ4oULKiBwLWZzmeV7XAV945tPXpAKp+SBjOGFjzDpTypQYY2hXArmjvpQfGVUrOJDICQkAScPGPnJ07g+5bx+bfpmZLpcLffSR8670sTlxcy9DAcRk/8IXOf0D7XTYINk/hR8AAAAASUVORK5CYII="

	},

	speedInSpace: 1,

	Mouse: {

		x: 0,

		y: 0

	},

	random: function(){
		return Math.floor(Math.random() * 250) - 125;
	},

	initialize: function(){
		var me			= this;
		me.div			= document.createElement('div');
		me.div.setAttribute("style", "padding:0px;cursor:pointer;height:32px;width:32px;position:fixed;left:510px;top:250px;z-index:99999999999;");
		me.div.style.backgroundImage = "url('" + me.icon.normal + "')";

		document.body.appendChild(me.div);

		document.onmousemove = function(e){
			me.Mouse.x = e.clientX;
			me.Mouse.y = e.clientY;
		},

		me.div.onmousedown = function(){
			me.div.style.backgroundImage = "url('" + me.icon.whenClick + "')";
		};

		me.div.onmouseup = me.div.onmouseout = function(){
			me.div.style.backgroundImage = "url('" + me.icon.normal + "')";
		};
	},

	interval: setInterval(function(){
		var me	= IconeMouseFollower;
		var div	= me.div;
		var x	= div.style.left;
		var y	= div.style.top;

		var mouseX = me.Mouse.x + me.random();
		var mouseY = me.Mouse.y + me.random();

		x		= x.replace(/px$/, '');
		y		= y.replace(/px$/, '');

		x		= Number(x);
		y		= Number(y);

		if (x < mouseX)
			x += me.speedInSpace;
		else if (x > mouseX)
			x -= me.speedInSpace;

		if (y < mouseY)
			y += me.speedInSpace;
		else if (y > mouseY)
			y -= me.speedInSpace;

		div.style.left	= x + 'px';
		div.style.top	= y + 'px';
	}, 10)
};

window.IconeMouseFollower.initialize();