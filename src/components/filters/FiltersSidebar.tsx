export default function FiltersSidebar() {
    return (
      <aside className="bg-white border rounded-xl p-5 space-y-6">
  
        <h3 className="font-semibold text-lg">Filter</h3>
  
        {/* Brand */}
        <div>
          <p className="font-medium mb-2">Brand</p>
  
          <div className="space-y-2 text-sm">
            <label className="flex gap-2">
              <input type="checkbox" />
              Nike
            </label>
  
            <label className="flex gap-2">
              <input type="checkbox" />
              Adidas
            </label>
  
            <label className="flex gap-2">
              <input type="checkbox" />
              Puma
            </label>
  
            <label className="flex gap-2">
              <input type="checkbox" />
              Uniqlo
            </label>
          </div>
        </div>
  
        {/* Price */}
        <div>
          <p className="font-medium mb-2">Price</p>
          <input type="range" className="w-full" />
        </div>
  
        {/* Size */}
        <div>
          <p className="font-medium mb-2">Size</p>
  
          <div className="flex flex-wrap gap-2">
            {["XS", "S", "M", "L", "XL"].map((size) => (
              <button
                key={size}
                className="border px-3 py-1 rounded hover:bg-gray-100"
              >
                {size}
              </button>
            ))}
          </div>
        </div>
  
      </aside>
    );
  }