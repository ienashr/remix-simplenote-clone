import { Link } from "@remix-run/react";

export default function help() {
    return (
      <main className="w-full flex flex-col items-center justify-center py-8 h-full space-y-8 my-12">

      <div  className="lg:w-2/4 sm:w-5/6 space-y-4">
      <h1 className="text-5xl font-bold" id="top">Help Center</h1>

      <hr/>

      <h2 className="text-4xl font-bold">Tips & Tricks</h2>
      <h3 className="text-3xl font-bold">Is there a way to import my notes?</h3>
      <p>Yes. You can now import notes into our desktop app for Windows, Linux, and macOS*. To get started, select File Import Notes from the app menu, then pick the type of notes you will be importing.</p>
      <p>You can also import from our web app! When logged in, click the menu on the top left corner (three horizontal lines), then click on Settings and choose the Tools tab. Finally, click on Import Notes.</p>
      <p>The options are:</p>
      <ul>
        <li>Simplenote exports (.json)</li>
        <li>Plain text files, including Markdown files (.txt or .md)</li>
        <li>Evernote export (.enex — only supported in the desktop app)</li>
      </ul>
      <p>You can browse the notes you want to import or drag and drop a file into the import window. The app takes care of the rest. If you are importing notes with Markdown formatting and you would like to keep them that way, check the Enable Markdown on all notes box and they will be automatically configured as Markdown notes in Simplenote.</p>
      <p>Note: The import tool will import all content in the export file as new notes. It will not merge new changes to existing notes or ignore duplicate notes under your Simplenote account.</p>
      <p>*A quick note, Mac users! To use the importer, make sure you are using the Electron version of the app, available here. The standard version of the app available in the Mac App Store does not support importing yet.</p>

      <h3 className="text-3xl font-bold">Is there some way to export my notes?</h3>
      <p>You can export your data, including notes and tags, from the web, Android, and desktop apps for Windows, Linux and macOS*.</p>
      <h4 className="text-2xl font-bold">Web</h4>
      <p>You can backup your notes by exporting them from our web app. When logged in, click the menu on the top left corner (three horizontal lines), then click on Settings and choose the Tools tab. Finally, click on Export Notes.</p>
      <h4 className="text-2xl font-bold">Android</h4>
      <p>You can export your notes from the Android app by opening the navigation drawer, tapping the Settings item in the drawer, and tapping the Export data option under the Account section. You will be shown the system file explorer where you can choose to save your data locally or remotely via services like Google Drive if you have a Google account on the device. You will also be able to edit the file name, which is simplenote.json by default.</p>
      <h4 className="text-2xl font-bold">Desktop app (Linux, Windows, macOS*)</h4>
      <p>You can also export notes in the desktop app at File Export Notes. Either method will download a .zip file of all your notes. The filename for each individual note is the first line of the note.</p>
      <p>*To export notes on macOS, make sure you are using the Electron version of the app, available here. The standard version of the app available in the Mac App Store does not support exporting yet.</p>

      <h3 className="text-3xl font-bold">How can I add a checklist?</h3>
      <p>On our mobile apps, you will find a new button in the editor toolbar to add a checklist. On Desktop, head to Format → Insert Checklist. Nested Checklists are also supported, in case you need an extra level of organization.</p>

      <h3 className="text-3xl font-bold">How can I share a note or collaborate with others?</h3>
      <p>If you would like others to view and edit one of your notes, add their email address as a tag. The shared note will then pop up in their list of notes. They will need to have their own Simplenote account first. Similarly, if you would like to work on a note together, have them add your email address as a tag to collaborate. In the iOS app, instead of adding your email address as a tag, you can tap the Info panel icon when viewing a note, then tap Collaborate.</p>
      <p>If you would like to share a view-only version, you can use the publish to web feature.</p>

      <h3 className="text-3xl font-bold">How can I change the language?</h3>
      <p>You can change the language on Android and iOS by changing it from your device settings. At the moment Simplenote is not localized in Linux, Windows, or on the web.</p>

      <h3 className="text-3xl font-bold">What are the keyboard shortcuts available?</h3>
      <p>There are keyboard shortcuts for our Android, Electron (Linux, Windows), and macOS apps.</p>
      <h4 className="text-2xl font-bold">Android</h4>
      <p>Tap Ctrl  , to see a list of shortcuts available on the current screen. A list of all shortcuts is below.</p>
      <table></table>

      <h4 className="text-2xl font-bold">Electron (Linux, Windows)</h4>
      <p>Type Ctrl / to view all shortcuts. Here are some common ones:</p>
      <table></table>

      <h4 className="text-2xl font-bold">macOS</h4>
      <table></table>

      <h2 className="text-4xl font-bold">Notes</h2>
      <h3 className="text-3xl font-bold">Can I print my notes?</h3>
      <p>Yes! You can print your notes using our web, Android, Electron (Linux, Windows), iOS, and macOS apps.</p>

      <h4 className="text-2xl font-bold">Web</h4>
      <p>Open your browser printing options and choose the option to print the selection. Different browsers will offer different options for this.</p>

      <h4 className="text-2xl font-bold">Android</h4>
      <p>Open your note, and publish it to web. Open the link in your browser (might differ depending on your browser app), and Share the link. You will see “Print” as an option.</p>

      <h4 className="text-2xl font-bold">Electron (Linux, Windows)</h4>
      <p>Open your note and use the File - Print menu option or Ctrl P.</p>

      <h4 className="text-2xl font-bold">iOS</h4>
      <p>Open your note, click on the Info in the panel, and select “Send.” You will see “Print” as an option.</p>

      <h4 className="text-2xl font-bold">macOS</h4>
      <p>Open Simplenote, and click on the “Note” settings. You will see the option to Print your note using your system's preferences.</p>

      <h3 className="text-3xl font-bold">How does syncing work?</h3>
      <p>All notes are synced between your device, the web app, and any desktop apps that you might have downloaded. When you create, edit, or delete notes in any of these locations, they automatically and wirelessly sync to the other locations as well as soon as you open the app.</p>

      <h3 className="text-3xl font-bold">Can I search notes without a connection to the internet?</h3>
      <p>Yes, you can search your notes even when you are offline using Simplenote for Android, Linux Windows, iOS, and macOS apps. You can even search on app.simplenote.com when you are offline, as long as you have logged into the app while online.</p>

      <h3 className="text-3xl font-bold">Can I use Markdown?</h3>
      <p>Yes! Markdown is supported on our web, Android, Electron (Linux, Windows), and iOS apps.</p>
      <h4 className="text-2xl font-bold">Web</h4>
      <p>Open a note for editing then select the Actions icon (the icon with three dots in a circle at the very top of the screen) and then check the option next to “Markdown”.</p>
      <h4 className="text-2xl font-bold">Android</h4>
      <p>You can enable and disable Markdown on a per-note basis by tapping the ellipsis action in the top app bar while viewing a note and tapping the Markdown checkbox. Simplenote Android will remember the last time you enabled or disabled Markdown on a note and apply that setting when notes are created.</p>
      <p>You can enable and disable Markdown on a per-note basis by tapping the ellipsis action in the top app bar while viewing a note and tapping the Markdown checkbox. Simplenote Android will remember the last time you enabled or disabled Markdown on a note and apply that setting when notes are created.</p>
      <p>To use single spacing, add two spaces ( ) followed by one new line to the end of a line. To use double spacing, add two new lines to the end of a line.</p>
      <p>To create a heading, add number signs (#) in front of a word or phrase. The number of number signs you use should correspond to the heading level.</p>
      <p>To bold text, add two asterisks (**) or underscores (__) before and after a word or phrase. To italicize text, add one asterisk (*) or underscore (_) before and after a word or phrase. To emphasize text with bold and italics at the same time, add any combination of three asterisks (***) or underscores (___) before and after a word or phrase.</p>
      <p>To create an image, put an exclamation mark (!) before the enclosed image text in brackets (e.g., ![Image]) and then follow it immediately with the URL in parentheses (e.g., (https://cldup.com/DqxSeQlvga.png)).</p>
      <img className="py-8 sm:px-16 lg:px-36" src="https://cldup.com/DqxSeQlvga.png" alt=""/>

      <h4 className="text-2xl font-bold">Electron (Linux, Windows)</h4>
      <p>First, enable it on your note by selecting the Info panel icon and toggle the Markdown setting.</p>

      <h4 className="text-2xl font-bold">iOS</h4>
      <p>Click on the Info panel icon and toggle the markdown setting. Once enabled, you can swipe left to preview your markdown notes, and swipe right to continue editing.</p>

      <h3 className="text-3xl font-bold">How does publishing work?</h3>
      <p>Publishing notes is a way to share notes on the web for others to read. You can use the new info panel to publish a note to the web. Just tap the Info panel icon when viewing a note, then tap Publish. Within seconds you’ll be able to share a link to get the word out. To publish a note using the web app, click on the ellipsis icon and then click on Publish.</p>

      <h3 className="text-3xl font-bold">What's the maximum length of a note?</h3>
      <p>You can create very long notes if you absolutely have to, but we don't recommend making notes longer than several thousand words. Huge notes can take a long time to process both in the web app and on your device.</p>

      <h3 className="text-3xl font-bold">How many notes can I make?</h3>
      <p>We don't currently place any restrictions on the number of notes you can make, as long as you are not abusing the system.</p>

      <h3 className="text-3xl font-bold">How do internal links work?</h3>
      <p>Internal links allow you to link to one note from within another note. You can read more about how to use them on this blog post: https://simplenote.com/2020/11/03/introducing-internal-links/</p>

      <h2 className="text-4xl font-bold">Troubleshooting</h2>
      <h3 className="text-3xl font-bold">I accidentally deleted a note. Can I recover it?</h3>
      <p>Yes, all deleted notes go into your Trash. To see the notes that are in your Trash, you need to view the “Trash” tag. On Android and iOS, simply return to your main notes list and open the tags drawer. You'll see “Trash” below the “All Notes” row. In the web app, hover over the tag in your note list, and select Trash.</p>
      <p>When viewing your Trash, you can choose to restore a previously deleted note by swiping from right to left on the note then by tapping “restore.” It will then appear back inside All Notes.</p>

      <h3 className="text-3xl font-bold">I lost a note or some text from a note. What can I do?</h3>
      <p>In the vast majority of cases, Simplenote's synchronization works great. We handle millions of synchronization requests each day without any problems. But if you do lose your data, even just a single character, and even if it's not our fault, we want to hear about it. The integrity of your notes is our top priority. Any form of data loss is completely unacceptable.</p>
      <p>The first thing is to check the note history, most Simplenote apps support viewing previous versions of a note. Be sure to check the history of any blank or duplicate notes you can see. Most of the time you will find your content there. If not, you may want to check the Trash and restore the note from there. Notes put in the Trash still retain their version history.</p>
      <p>We’re in the process of adding additional safeguards and fallback measures for your notes. Please contact us regarding any form of data loss and try to provide as many details as you can remember about the circumstances that caused the problem so we can ensure it won't happen again in the future.</p>

      <h2 className="text-4xl font-bold">Security</h2>
      <h3 className="text-3xl font-bold">Are my notes encrypted in storage?</h3>
      <p>In terms of security, Simplenote works a lot like other popular online services such as Gmail and Facebook. Your personal information is protected by a strict Privacy Policy. Notes are not encrypted at rest due to server side constraints. For this reason we recommend not using Simplenote to store anything particularly sensitive.</p>
      <p>Unlike a lot of other services, however, by default your notes in Simplenote are always encrypted when they're in transit across a network. This is important. It's when your personal information is most vulnerable. We believe that all modern services should provide this level of protection by default.</p>

      <h3 className="text-3xl font-bold">You have my email address…</h3>
      <p>We respect the privacy of our users, and we'll never give email addresses to third parties.</p>

      <h3 className="text-3xl font-bold">Does Simplenote encrypt my notes during synchronization?</h3>
      <p>Yes, this is important! Don't settle for anything less. Nonetheless, we discourage users from storing extremely sensitive information such as passwords, bank account information, or social security numbers. Please see our Privacy Policy if you have any concerns.</p>

      <h2 className="text-4xl font-bold">Information</h2>
      <h3 className="text-3xl font-bold">How can I contact you?</h3>
      <p>If the information on this page does not answer your questions please contact us here!</p>

      <h3 className="text-3xl font-bold">How much does Simplenote cost?</h3>
      <p>Simplenote is a free service provided by your friends at Automattic.</p>

      <h3 className="text-3xl font-bold">What happened to Dropbox support?</h3>
      <p>Simplenote no longer supports Dropbox sync.</p>

      <h2 className="text-4xl font-bold">Account</h2>
      <h3 className="text-3xl font-bold">I forgot my password. What do I do?</h3>
      <p>To reset your password, visit app.simplenote.com/forgot. Enter your email address there and a password reset link will be sent to you.</p>

      <h3 className="text-3xl font-bold">Can I close my account?</h3>
      <p>Yes, this can be done via the Simplenote web app only:</p>

      <h3 className="text-3xl font-bold">How do I change the email address I use to sign in?</h3>
      <p>You can change your email address by visiting the Settings page in the web app. At the top, you'll see your address along with a “change” link. Click that link and you'll be able to enter your new address. A confirmation email will be sent to your old address.</p>

      <Link to="/help"><button className='bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline'>Back to top</button></Link>

      </div>
      </main>
    );
  }
  