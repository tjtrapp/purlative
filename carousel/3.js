/**
 * @fileoverview This file has been created to demonstrate one implementation of a carousel in javascript.  
 * It uses css3 transitions to slide the elements left and right.  
 */
 
(function (w, d) {
    
    /** @constructor */
    function TJCarousel(contentBoxSelector) {
        
        if (!contentBoxSelector) {
            throw "TJCarousel requires a content box selector";
        }
        
        this.contentBoxSelector = contentBoxSelector;
        this.pageNumber = 1;
        this.totalPages = 1;
        
        this.init();
        
        return this;
        
    }
    
    TJCarousel.prototype = {
        
        /**
        * Initalization of the content box and listItems var
        * @return {object} this
        */
        init: function () {
            
            this.contentBoxEl = d.querySelector(this.contentBoxSelector);
            if (!this.contentBoxEl) {
                throw "TJCarousel requires a valid content box element.  Element for selector '" + this.contentBoxSelector + "' not found.";
            }
    
            this.listItems = this.contentBoxEl.querySelectorAll("li");
            if (!this.listItems || this.listItems.length === 0) {
                throw "TJCarousel requires at least one list item.";
            }
            
            this.totalPages = Math.ceil(this.listItems.length / 3);
            
            return this;
            
        },
        
        /**
        * Binds functions
        * @return {object} this
        */
        bind: function () {
            
            var that = this;
            
            this.boundingBoxEl.addEventListener("click", function (evt) {
                that.handleButtonClick(evt);
            });
            
            w.addEventListener("keyup", function (evt) {
                that.handleKeyDown(evt);
            });
            
            return this;
            
        },
        
        /**
        * Tears down the created markup
        * @return {object} this
        */        
        destroy: function () {
            this.contentBoxEl = null;
        },
        
        /**
        * Create the necessary markup to run this widget
        * @return {object} this
        */
        render: function () {
            
            var rootParentEl,
                containerEl,
                wrapEl,
                prevButton,
                nextButton,
                totalWidth = 0;
            
            wrapEl = d.createElement("div");
            this.appendClass(wrapEl, "tjc-container");
            this.contentBoxEl.parentNode.appendChild(wrapEl);
            
            wrapEl.appendChild(this.contentBoxEl);
            
            for (var li = null, className, idx = 0, len = this.listItems.length; idx < len; idx++) {
                
                li = this.listItems[idx];
                
                this.wrap(li, "div");
                
                this.appendClass(li, "tjc-item");                
                
                // add in the margins at 27px
                // TODO: fix this
                totalWidth += (li.offsetWidth + 27);
                
            }
            
            this.contentBoxEl.setAttribute("style", "width:" + totalWidth + "px");
            
            rootParentEl = wrapEl.parentNode;
            
            this.boundingBoxEl = d.createElement("div");
            this.appendClass(this.boundingBoxEl, this.ATTRS.boundingBoxClassName);            
            this.boundingBoxEl.appendChild(wrapEl);
            
            rootParentEl.appendChild(this.boundingBoxEl);
            
            nextButton = d.createElement("button");
            nextButton.innerHTML = ">";
            this.appendClass(nextButton, this.ATTRS.nextButtonClassName);
            this.boundingBoxEl.appendChild(nextButton);
            
            prevButton = d.createElement("button");
            prevButton.innerHTML = "<";
            this.appendClass(prevButton, this.ATTRS.prevButtonClassName);
            this.boundingBoxEl.insertBefore(prevButton, wrapEl);
            
            this.bind();
            
            return this;
            
        },
        
        /** 
        * Handles button clicks and determines if carousel should move right or left
        * @param {object} e the event object
        * @return {object} this
        */
        handleButtonClick: function (e) {
          
            var target = e.target,
                className = target.getAttribute("class");
            
            if (className.indexOf("prev-button") != -1) {
                this.moveLeft();                
            } else if (className.indexOf("next-button") != -1) {
                this.moveRight();
            } 
            
            return this;
            
        },
        
        /**
        * Handles keydown event, checks for left or right only, and invokes fn
        * @param {object} e the event object        
        * @return {object} this
        */
        handleKeyDown: function (e) {
            
            var key = e.keyCode;
            
            if (key === 37) {
                this.moveLeft();
            } else if (key === 39) {
                this.moveRight();
            } 
            
            return this;
            
        },
        
        /**
        * Slides the listItems to the left when user clicks the right button
        * @return {object} this
        */
        moveRight: function () {
        
            if (this.pageNumber >= this.totalPages) {
                return;
            }
        
            this.distance = this.pageNumber * -340;
            
            this.move();
           
            this.pageNumber += 1;
            
            return this;
        },
        
        /**
        * Slides the listItems to the right when user clicks the left button
        * @return {object} this
        */
        moveLeft: function () {

            if ((this.pageNumber - 1) <= 0) {
                return;
            }

            this.distance = this.distance + 340;

            this.move();

            this.pageNumber -= 1;

            return this;
           
        },
        
        /**
        * Loops over the listitems and applies the new styles
        * @param {number} distance how far to move the listItems (use negative to indicate a slide to the left)
        * @return {object} this
        */
        move: function (distance) {
            
            for (var item, idx = 0, len = this.listItems.length; idx < len; idx++) {
                
                item = this.listItems[idx];
                
                item.setAttribute("style", this.createStyle(this.distance));
                
            }
            
            return this;
            
        },
        
        /**
        * appends a new css classname to the already existing class names
        * @param {object} el the element to which the className is appended
        * @param {string} className the class to append to the element
        * @return {object} this
        */
        appendClass: function(el, className) {
            
            var existingClassNames = el.getAttribute("class") || "";
            existingClassNames += (existingClassNames.length > 0) ? (" " + className) : className;
            el.setAttribute("class", existingClassNames);
        
            return this;
            
        },
        
        /**
        * Checks to see if the classname exists on the element
        * @param {object} el the element to which the className gets searched
        * @param {string} className the className to find
        * @return {boolean} true if classname exists, false otherwise
        */
        hasClass: function (el, className) {
            
            var classNames = el.getAttribute("class") || "",
                classNameExists = classNames.indexOf(className) !== -1;
            
            return classNameExists;
            
        },
        
        /**
        * Replaces any instances of the className with an empty string
        * @param {object} el the element to which the className is removed
        * @param {string} className the class to remove from the element
        * @return {object} this
        */
        removeClass: function (el, className) {
            
            var existingClassNames = el.getAttribute("class") || "",
                newClassNames = existingClassNames.replace(className, "");
            el.setAttribute("class", newClassNames);
            
            return this;
            
        },
        
        /**
        * Adds tagName around el and all of els child elements
        * @param {object} el the element that gets wrapped by an instance of tagName
        * @param {string} tagName the element to create and wrap around el
        * @return {object} this
        */
        wrap: function (el, tagName) {
          
            var kids = el.getElementsByTagName("*"),
                wrapEl = d.createElement("div");
            
            for (var kidEl, 
                     idx = 0, 
                     len = kids.length; idx < len; idx++) {
                
                // always get the head element
                kidEl = kids[0];
                
                wrapEl.appendChild(kidEl);
                
            }
            
            el.appendChild(wrapEl);
            
            return this;
            
        },
        
        /**
        * Creates the styles to css transition the listItems right or left
        * @param {number} the distance to move the listItems (use negative to slide listItems left)
        * @return {string} the inline style for the element with the appropriate distance
        */
        createStyle: function (distance) {
            
            var s = "-webkit-transition-property: left; -webkit-transition-duration: 1s; -moz-transition-property: left; -moz-transition-duration: 1s; transition-property: left; transition-duration: 1s;",
                left = "left:" + distance + "px;";

            return s + left;
            
        },
        
        ATTRS: {
            numItemsVisible: 3,
            boundingBoxClassName: "tj-carousel",
            prevButtonClassName: "prev-button",
            nextButtonClassName: "next-button"
        }
        
    };
    
    w.TJCarousel = TJCarousel;
    
})(window, document);