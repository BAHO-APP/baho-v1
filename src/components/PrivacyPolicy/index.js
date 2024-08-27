import React from 'react';
import { Link } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <div className="bg-black py-12 px-6 md:px-24 lg:px-48">
      <h1 className="text-4xl font-bold mb-6 text-center text-green-700">
        Privacy Policy
      </h1>
      <p className="mb-6 text-white">
        This privacy policy applies to the Baho app (hereby referred to as
        "Application") for mobile devices that was created by Baho (hereby
        referred to as "Service Provider") as a Free service. This service is
        intended for use "AS IS".
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-green-600">
        Information Collection and Use
      </h2>
      <p className="mb-6 text-white">
        The Application collects information when you download and use it. This
        information may include details such as:
      </p>
      <ul className="list-disc list-inside mb-6 text-white">
        <li>Your device's Internet Protocol address (e.g., IP address)</li>
        <li>
          The pages of the Application that you visit, including the time and
          date of your visit
        </li>
        <li>The time spent on the Application and specific pages</li>
        <li>The operating system used on your mobile device</li>
      </ul>
      <p className="mb-6 text-white">
        The Application does not gather precise information about the location
        of your mobile device. The Service Provider may use the information you
        provide to contact you from time to time to offer important information,
        required notices, and marketing promotions.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-green-600">
        Third Party Access
      </h2>
      <p className="mb-6 text-white">
        Only aggregated, anonymized data is periodically transmitted to external
        services to aid the Service Provider in improving the Application and
        their services. The Service Provider may share your information with
        third parties in the ways described in this privacy statement. Please
        note that the Application utilizes third-party services that have their
        own Privacy Policy about handling data:
      </p>
      <ul className="list-disc list-inside mb-6 text-white">
        <li>Google Play Services</li>
      </ul>

      <h2 className="text-2xl font-semibold mb-4 text-green-600">
        Opt-Out Rights
      </h2>
      <p className="mb-6 text-white">
        You can stop all collection of information by the Application easily by
        uninstalling it. You may use the standard uninstall processes available
        on your mobile device or via the mobile application marketplace or
        network.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-green-600">
        Data Retention Policy
      </h2>
      <p className="mb-6 text-white">
        <p className="font-bold underline">Active Account Data</p> User profile
        information and interactions will be retained indefinitely while the
        account is active.{' '}
        <p className="font-bold pt-5 underline">Inactive Accounts</p> Data from
        inactive accounts will be retained for a period 24 months before being
        permanently deleted. If you wish to delete the User Provided Data that
        you have submitted through the Application, please contact us at
        <a
          href="mailto:nyiringabo.ali@gmail.com"
          className="text-blue-600 underline"
        >
          &nbsp;nyiringabo.ali@gmail.com
        </a>
        We will address your request within a reasonable timeframe.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-green-600">Children</h2>
      <p className="mb-6 text-white">
        The Service Provider refrains from utilizing data that contains content
        deemed harmful or potentially traumatizing to children under 13 years of
        age.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-green-600">Security</h2>
      <p className="mb-6 text-white">
        The Service Provider is concerned about safeguarding the confidentiality
        of your information. They provide physical, electronic, and procedural
        safeguards to protect the information processed and maintained.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-green-600">Changes</h2>
      <p className="mb-6 text-white">
        This Privacy Policy may be updated from time to time for any reason. The
        Service Provider will notify you of any changes by updating this page
        with the new Privacy Policy. You are advised to review this Privacy
        Policy periodically for any changes, as continued use is deemed approval
        of all changes.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-green-600">
        Your Consent
      </h2>
      <p className="mb-6 text-white">
        By using the Application, you are consenting to the processing of your
        information as set forth in this Privacy Policy, as amended by us.
      </p>

      <h2 className="text-2xl font-semibold mb-4 text-green-600">Contact Us</h2>
      <p className="text-white">
        If you have any questions regarding privacy while using the Application,
        or have questions about our practices, please contact us via email at{' '}
        <a
          href="mailto:nyiringabo.ali@gmail.com"
          className="text-blue-600 underline"
        >
          nyiringabo.ali@gmail.com
        </a>
        .
      </p>
      <div className="flex items-center justify-center mt-[8%]">
        <Link to="/" className="p-3 bg-green-600 rounded-lg">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
