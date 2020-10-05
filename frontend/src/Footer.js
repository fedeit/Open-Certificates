import React from 'react';
import logo from './logo.svg';
import './App.css';

function getFacebookLink() {
    openSharePage('https://www.facebook.com/sharer/sharer.php?u=' + window.location.href);
}

function getLinkedInLink() {
    openSharePage('https://www.linkedin.com/sharing/share-offsite/?url=' + window.location.href);
}

function getTwitterShare() {
    openSharePage("https://twitter.com/intent/tweet?url=" + window.location.href);
}

function openSharePage(url) {
    window.open(
        url, 
        'facebook-share-dialog', 
        'width=626,height=436'
    ); 
}

function Footer() {
  return (<div>
    <footer class="footer text-center">
        <div class="container">
            <ul class="list-inline mb-5">
                <li class="list-inline-item">&nbsp;<a class="text-white social-link rounded-circle" onClick={ getFacebookLink }><i class="icon-social-facebook"></i></a>
            </li>
                <li class="list-inline-item">&nbsp;<a class="text-white social-link rounded-circle" onClick={ getLinkedInLink }><i class="icon-social-linkedin"></i></a></li>
                <li class="list-inline-item">&nbsp;<a class="text-white social-link rounded-circle" onClick={ getTwitterShare }><i class="icon-social-twitter"></i></a></li>
            </ul>
            <p class="text-muted mb-0 small">This is an open source platform built by Federico Galbiati, check it out at github.com/fedeit/open-certificates!</p>
        </div>
        <a class="js-scroll-trigger scroll-to-top rounded" href="#page-top"><i class="fa fa-angle-up"></i></a>
    </footer>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.5.2/js/bootstrap.bundle.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-easing/1.4.1/jquery.easing.min.js"></script>
    <script src="assets/js/script.min.js"></script>
      </div>);
}

export default Footer;
