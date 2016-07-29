# bj101
# Reference
# cex/meanbook cex_meanbook 
book1: MEAN Web Development, By: Amos Q. Haviv, Publisher: Packt Publishing, Pub. Date: September 25, 2014

# app/views/ex/proangular
# cex/proangular cex_proangular
book2: Pro AngularJS, By: Adam Freeman, Publisher: Apress,  Pub. Date: April 01, 2014, 
        Print ISBN-10: 1-4302-6448-9,  ISBN-13: 978-1-4302-6448-4
        
# cex/angularjs01
book3: AngularJS, By: Rodrigo Branas; Chandermani; Matt Frisbie; Amos Q. Haviv, Pub. Date: April 22, 2016
       Web ISBN-13: 978-1-78646-736-2, Print ISBN-13: 978-1-78646-578-8

# app/views/ex/mongnode2
book4: Web Development with MongoDB and NodeJS - Second Edition
       By: Mithun Satheesh; Bruno Joseph D'mello; Jason Krol
       Pub. Date: October 30, 2015
       Print ISBN-13: 978-1-78528-752-7
       Web ISBN-13: 978-1-78528-745-9

# ubuntu install mongodb
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv EA312927
echo "deb http://repo.mongodb.org/apt/ubuntu trusty/mongodb-org/3.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-3.2.list
sudo apt-get update
sudo apt-get install -y mongodb-org

sudo service mongod start

# end ubuntu install mongodb

# mongodb setup
    // git clone git://github.com/mongolab/hello-mongoose.git && cd hello-mongoose
    //heroku create
    heroku addons:add mongolab
    git push heroku master
    heroku open

# end -- mongodb setup

# npm/bower setup
 sudo npm install -g js-beautify
 sudo npm install -g bower browserify
 sudo ln -s /usr/bin/nodejs /usr/bin/node
 npm install; bower install;
 npm update; bower update;
# end npm/bower setup

# karma
sudo npm install -g karma-cli
$ NODE_ENV=test karma start
# karma

# npm install -g
  npm install -g mocha
  npm install -g karma-cli
  npm install -g grunt-cli

  npm install -g protractor
  sudo webdriver-manager update
  node_modules/protractor/bin/webdriver-manager update

# end npm install -g

# js-beautify
js-beautify --config jsbeautify.config <--type html> src.html > dest.htm
#
