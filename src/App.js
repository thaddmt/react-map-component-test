import { AmplifyMap, Geocoder } from "@aws-amplify/ui-react";
import { Amplify } from "aws-amplify";

import "@aws-amplify/ui-react/styles.css";
import awsExports from "../src/aws-exports";

Amplify.configure(awsExports);

export default function MapWithGeocoder() {
  return (
    <AmplifyMap>
      <Geocoder />
    </AmplifyMap>
  );
}
