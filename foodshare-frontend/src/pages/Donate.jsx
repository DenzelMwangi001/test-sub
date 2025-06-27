import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Donate() {
  const initialValues = {
    name: "",
    description: "",
    quantity: "",
    expiry_date: "",
    location: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().min(2, "Name too short").required("Required"),
    description: Yup.string().required("Required"),
    quantity: Yup.number().min(1, "Must be at least 1").required("Required"),
    expiry_date: Yup.date().required("Required"),
    location: Yup.string().required("Required"),
  });

  const handleSubmit = async (values, { resetForm }) => {
    try {
      const response = await fetch("http://127.0.0.1:5000/api/food_items", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...values,
          user_id: 1, // 🔁 TEMP: Replace with real user ID when you add auth
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit donation");
      }

      const data = await response.json();
      alert("Food item submitted successfully! ✅");
      resetForm();
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong while submitting the donation.");
    }
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-xl">
      <h2 className="text-2xl font-display mb-4 text-center text-charcoal">
        Donate Food Item
      </h2>

      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="space-y-4">
          <div>
            <label className="block mb-1 font-medium text-gray-700">Name</label>
            <Field
              type="text"
              name="name"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <ErrorMessage name="name" component="p" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Description</label>
            <Field
              as="textarea"
              name="description"
              rows="3"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <ErrorMessage name="description" component="p" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Quantity (kg)</label>
            <Field
              type="number"
              name="quantity"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <ErrorMessage name="quantity" component="p" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Expiry Date</label>
            <Field
              type="date"
              name="expiry_date"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <ErrorMessage name="expiry_date" component="p" className="text-red-500 text-sm" />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">Location</label>
            <Field
              type="text"
              name="location"
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-gold"
            />
            <ErrorMessage name="location" component="p" className="text-red-500 text-sm" />
          </div>

          <button
            type="submit"
            className="w-full py-2 mt-4 text-white font-semibold bg-charcoal hover:bg-gold hover:text-black rounded-lg transition-all"
          >
            Submit Donation
          </button>
        </Form>
      </Formik>
    </div>
  );
}


