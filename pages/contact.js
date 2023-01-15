export default function contact(){
    return(
        <div>
            <h1>Contact Me!</h1>
            <a href="mailto:meganbenn27@icloud.com" className={styles.blueBaby}>
                Email me today!
            </a>
            <p>
                Lets schedule a meeting!
            </p>
            <!-- Calendly inline widget begin -->
        <div class="calendly-inline-widget" data-url="https://calendly.com/meganbenn27/interview?hide_gdpr_banner=1" style="min-width:320px;height:630px;"></div>
            <script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
            <!-- Calendly inline widget end -->
        </div>
    )
}