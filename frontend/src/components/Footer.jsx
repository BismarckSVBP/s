



//checking


import React from "react";
import { Link } from "react-router-dom";
import { Shield, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-muted/30 border-t mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Link to="/">
                <div className="bg-red-600 p-2 rounded-lg">
                  <Shield className="h-5 w-5 text-white" />
                </div>
              </Link>
              <Link
                to="/"
                className="text-lg font-bold text-foreground hover:text-red-600 transition-colors"
              >
                SOS Alert
              </Link>
            </div>
            <p className="text-muted-foreground text-sm">
              Your trusted emergency safety companion. Stay connected with your
              loved ones during emergencies.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              <Link
                to="/"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                About
              </Link>
              <Link
                to="/contact"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Contact
              </Link>
              <Link
                to="/dashboard"
                className="block text-sm text-muted-foreground hover:text-foreground transition-colors"
              >
                Dashboard
              </Link>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <div className="space-y-2">
              <span className="block text-sm text-muted-foreground">
                Emergency SOS
              </span>
              <span className="block text-sm text-muted-foreground">
                Live Location Sharing
              </span>
              <span className="block text-sm text-muted-foreground">
                Media Streaming
              </span>
              <span className="block text-sm text-muted-foreground">
                Emergency Contacts
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <a
              href="tel:112"
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Phone className="h-4 w-4 text-red-600" />
              <span>112</span>
            </a>

            <a
              href="mailto:helpsosalert@gmail.com"
              className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              <Mail className="h-4 w-4 text-red-600" />
              <span>helpsosalert@gmail.com</span>
            </a>

            <div className="flex items-center space-x-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-default">
              <MapPin className="h-4 w-4 text-red-600" />
              <span>24/7 Support</span>
            </div>
          </div>
        </div>

        <div className="border-t mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; 2024 SOS Alert. All rights reserved. Your safety matters.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
