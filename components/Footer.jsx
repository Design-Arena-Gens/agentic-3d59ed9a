export default function Footer() {
  return (
    <footer className="border-t border-gray-100 mt-16">
      <div className="section py-10 text-sm text-gray-600 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p>? {new Date().getFullYear()} Voyage. All rights reserved.</p>
        <div className="flex items-center gap-4">
          <a href="#" className="hover:text-primary-600">Privacy</a>
          <a href="#" className="hover:text-primary-600">Terms</a>
          <a href="#" className="hover:text-primary-600">Contact</a>
        </div>
      </div>
    </footer>
  );
}
