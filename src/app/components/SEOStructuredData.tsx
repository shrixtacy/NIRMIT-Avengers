import React from "react";
import { generateCollegeSchema, generateEventSeriesSchema } from "../seo-data";

export default function SEOStructuredData() {
  const collegeSchema = generateCollegeSchema();
  const eventSeriesSchema = generateEventSeriesSchema();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collegeSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSeriesSchema) }}
      />
    </>
  );
}
