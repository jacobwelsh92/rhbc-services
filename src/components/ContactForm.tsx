/**
 * Premium Contact Form
 *
 * Designed to convert high-value customers with confidence.
 * Professional presentation builds trust during critical decision point.
 *
 * Customer Psychology:
 * - Multiple contact options (form, phone, email)
 * - Clear value proposition
 * - Professional validation messaging
 * - Privacy reassurance
 * - Fast response commitment
 *
 * Technical:
 * - Real-time validation with clear feedback
 * - GSAP animations for success/error states
 * - Accessible form labels and ARIA
 * - File upload for project documents
 * - Mobile-optimised inputs
 */

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  budgetRange: string;
  location: string;
  timeline: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

export default function ContactForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budgetRange: '',
    location: '',
    timeline: '',
    message: '',
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    // Animate form on scroll
    gsap.from(formRef.current, {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: formRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse',
      },
    });
  }, []);

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case 'name':
        return value.trim().length < 2 ? 'Please enter your full name' : '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Please enter a valid email address' : '';
      case 'phone':
        const phoneRegex = /^[\d\s\+\-\(\)]{10,}$/;
        return !phoneRegex.test(value) ? 'Please enter a valid phone number' : '';
      case 'projectType':
        return !value ? 'Please select a project type' : '';
      case 'message':
        return value.trim().length < 10 ? 'Please provide more details about your project (minimum 10 characters)' : '';
      default:
        return '';
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleBlur = (
    e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    if (error) {
      setErrors((prev) => ({ ...prev, [name]: error }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validate all required fields
    const newErrors: FormErrors = {};
    ['name', 'email', 'phone', 'projectType', 'message'].forEach((field) => {
      const error = validateField(field, formData[field as keyof FormData]);
      if (error) newErrors[field] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      // Shake animation for form
      gsap.to(formRef.current, {
        x: [0, -10, 10, -10, 10, 0],
        duration: 0.5,
        ease: 'power2.inOut',
      });
      return;
    }

    setIsSubmitting(true);

    try {
      // Replace with your actual form submission endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          projectType: '',
          budgetRange: '',
          location: '',
          timeline: '',
          message: '',
        });

        // Success animation
        gsap.to('.success-message', {
          scale: [0, 1.1, 1],
          opacity: [0, 1],
          duration: 0.6,
          ease: 'back.out(1.7)',
        });
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact-form" className="section bg-gradient-to-b from-white to-slate-50">
      <div className="container-custom">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <h2 className="mb-4">Get Your Free Quote</h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Tell us about your project and we'll provide a detailed quote within 24 hours.
              All consultations are completely free with no obligation.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="bg-white rounded-2xl shadow-xl p-8 md:p-10"
              >
                {/* Success Message */}
                {submitStatus === 'success' && (
                  <div className="success-message mb-8 p-6 bg-green-50 border-2 border-green-500 rounded-xl">
                    <div className="flex items-start gap-4">
                      <svg className="w-6 h-6 text-green-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <h3 className="text-lg font-bold text-green-900 mb-1">
                          Thank You! We've Received Your Inquiry
                        </h3>
                        <p className="text-green-700">
                          One of our project managers will contact you within 24 hours to discuss your project in detail.
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                {/* Error Message */}
                {submitStatus === 'error' && (
                  <div className="mb-8 p-6 bg-red-50 border-2 border-red-500 rounded-xl">
                    <div className="flex items-start gap-4">
                      <svg className="w-6 h-6 text-red-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                      </svg>
                      <div>
                        <h3 className="text-lg font-bold text-red-900 mb-1">
                          Submission Failed
                        </h3>
                        <p className="text-red-700">
                          Please call us directly at <a href="tel:+61474309168" className="font-semibold underline">+61 474 309 168</a>
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  {/* Name */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-slate-700 mb-2">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-200 ${
                        errors.name
                          ? 'border-red-500 bg-red-50'
                          : 'border-slate-200 focus:border-gray-900 focus:outline-none'
                      }`}
                      placeholder="John Smith"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-600">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-slate-700 mb-2">
                      Email Address <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-200 ${
                        errors.email
                          ? 'border-red-500 bg-red-50'
                          : 'border-slate-200 focus:border-gray-900 focus:outline-none'
                      }`}
                      placeholder="john@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-slate-700 mb-2">
                      Phone Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-200 ${
                        errors.phone
                          ? 'border-red-500 bg-red-50'
                          : 'border-slate-200 focus:border-gray-900 focus:outline-none'
                      }`}
                      placeholder="+61 4XX XXX XXX"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone}</p>
                    )}
                  </div>

                  {/* Company */}
                  <div>
                    <label htmlFor="company" className="block text-sm font-semibold text-slate-700 mb-2">
                      Company Name (Optional)
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-gray-900 focus:outline-none transition-colors duration-200"
                      placeholder="Your Company Pty Ltd"
                    />
                  </div>

                  {/* Project Type */}
                  <div>
                    <label htmlFor="projectType" className="block text-sm font-semibold text-slate-700 mb-2">
                      Project Type <span className="text-red-500">*</span>
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-200 ${
                        errors.projectType
                          ? 'border-red-500 bg-red-50'
                          : 'border-slate-200 focus:border-gray-900 focus:outline-none'
                      }`}
                    >
                      <option value="">Select project type...</option>
                      <option value="project-management">Project Management</option>
                      <option value="concrete-cutting">Concrete Cutting</option>
                      <option value="office-stripout">Office Strip Out</option>
                      <option value="demolition">Demolition Services</option>
                      <option value="waste-removal">Waste Removal</option>
                      <option value="skilled-labour">Skilled Labour</option>
                      <option value="other">Other</option>
                    </select>
                    {errors.projectType && (
                      <p className="mt-1 text-sm text-red-600">{errors.projectType}</p>
                    )}
                  </div>

                  {/* Budget Range */}
                  <div>
                    <label htmlFor="budgetRange" className="block text-sm font-semibold text-slate-700 mb-2">
                      Budget Range (Optional)
                    </label>
                    <select
                      id="budgetRange"
                      name="budgetRange"
                      value={formData.budgetRange}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-gray-900 focus:outline-none transition-colors duration-200"
                    >
                      <option value="">Select budget range...</option>
                      <option value="under-50k">Under $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k-200k">$100,000 - $200,000</option>
                      <option value="200k-500k">$200,000 - $500,000</option>
                      <option value="over-500k">Over $500,000</option>
                    </select>
                  </div>

                  {/* Location */}
                  <div>
                    <label htmlFor="location" className="block text-sm font-semibold text-slate-700 mb-2">
                      Project Location (Optional)
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-gray-900 focus:outline-none transition-colors duration-200"
                      placeholder="Brisbane, QLD"
                    />
                  </div>

                  {/* Timeline */}
                  <div>
                    <label htmlFor="timeline" className="block text-sm font-semibold text-slate-700 mb-2">
                      Desired Timeline (Optional)
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border-2 border-slate-200 focus:border-gray-900 focus:outline-none transition-colors duration-200"
                    >
                      <option value="">Select timeline...</option>
                      <option value="asap">As soon as possible</option>
                      <option value="1-month">Within 1 month</option>
                      <option value="1-3-months">1-3 months</option>
                      <option value="3-6-months">3-6 months</option>
                      <option value="flexible">Flexible</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-semibold text-slate-700 mb-2">
                    Project Details <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg border-2 transition-colors duration-200 resize-none ${
                      errors.message
                        ? 'border-red-500 bg-red-50'
                        : 'border-slate-200 focus:border-gray-900 focus:outline-none'
                    }`}
                    placeholder="Please provide details about your project including scope, specific requirements, and any other information that would help us provide an accurate quote."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                  )}
                </div>

                {/* Privacy Notice */}
                <div className="mb-6 p-4 bg-slate-50 rounded-lg">
                  <p className="text-sm text-slate-600">
                    <strong>Your privacy is important.</strong> We will never share your information with third parties.
                    By submitting this form, you consent to us contacting you about your project.
                  </p>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn btn-primary px-8 py-4 text-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin w-5 h-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Get My Free Quote
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                      </svg>
                    </span>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-6">
              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 text-white">
                <h3 className="text-2xl font-bold mb-6">Prefer to Call?</h3>
                <div className="space-y-6">
                  <a
                    href="tel:+61474309168"
                    className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-slate-300">Call or Text</p>
                      <p className="font-bold text-lg">+61 474 309 168</p>
                    </div>
                  </a>

                  <a
                    href="mailto:contact@rhbc-services.com.au"
                    className="flex items-center gap-4 p-4 bg-white/10 rounded-lg hover:bg-white/20 transition-colors group"
                  >
                    <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-slate-300">Email Us</p>
                      <p className="font-semibold text-sm break-all">contact@rhbc-services.com.au</p>
                    </div>
                  </a>
                </div>
              </div>

              {/* Business Hours */}
              <div className="bg-white rounded-2xl p-8 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-4">Business Hours</h3>
                <div className="space-y-3 text-slate-700">
                  <div className="flex justify-between">
                    <span>Monday - Friday:</span>
                    <span className="font-semibold">7:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday:</span>
                    <span className="font-semibold">8:00 AM - 2:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday:</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                  <div className="pt-4 border-t border-slate-200">
                    <p className="text-sm text-gray-900 font-semibold">
                      Emergency Services Available 24/7
                    </p>
                  </div>
                </div>
              </div>

              {/* Response Time */}
              <div className="bg-green-50 border-2 border-green-500 rounded-2xl p-6">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                  </svg>
                  <div>
                    <h4 className="font-bold text-green-900 mb-1">Fast Response Guaranteed</h4>
                    <p className="text-sm text-green-700">
                      We respond to all inquiries within 24 hours, usually much sooner during business hours.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
