import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { asset } from "../lib/assets";
import { 
  User, 
  Package, 
  MapPin, 
  Heart, 
  Settings, 
  LogOut, 
  Clock, 
  CheckCircle2, 
  Truck, 
  ArrowLeft, 
  Phone, 
  Mail, 
  ShieldCheck, 
  ChevronRight,
  Plus,
  Trash2,
  Edit3,
  Download,
  RotateCcw,
  Sparkles
} from "lucide-react";

export function Profile() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<"orders" | "addresses" | "preferences" | "settings">("orders");

  // Mock addresses state
  const [addresses, setAddresses] = useState([
    {
      id: "addr-1",
      title: "Home (Primary)",
      name: "Ananya Sharma",
      phone: "+91 98765 43210",
      street: "Flat 402, Pine Crest Apartments, Sector 14",
      city: "Gurugram",
      state: "Haryana",
      pincode: "122001",
      isDefault: true
    },
    {
      id: "addr-2",
      title: "Parents' Residence",
      name: "Virender Sharma",
      phone: "+91 98111 22334",
      street: "House 18, Block C, Green Park",
      city: "New Delhi",
      state: "Delhi",
      pincode: "110016",
      isDefault: false
    }
  ]);

  // Mock user settings
  const [userProfile, setUserProfile] = useState({
    name: "Ananya Sharma",
    email: "ananya.sharma@example.com",
    phone: "+91 98765 43210",
    familySize: "4 Members",
    preferredVariety: "Mountain Fuji"
  });

  const [savedSuccess, setSavedSuccess] = useState(false);

  const handleProfileSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  return (
    <div className="bg-stone-50/50 min-h-screen pt-10 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Top Breadcrumb & Actions */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <button 
            onClick={() => navigate("/")}
            className="inline-flex items-center text-stone-500 hover:text-brand-green font-semibold transition-colors group"
          >
            <ArrowLeft size={18} className="mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Orchard Store
          </button>
          
          <div className="flex items-center gap-2 text-xs font-semibold text-stone-400">
            <span>Account</span>
            <ChevronRight size={14} />
            <span className="text-brand-dark font-bold capitalize">{activeTab}</span>
          </div>
        </div>

        {/* Profile Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* LEFT COLUMN: User Summary Card & Navigation Menu */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* User Overview Card */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-stone-100 text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-r from-brand-green to-emerald-700" />
              
              <div className="relative pt-6">
                <div className="w-20 h-20 rounded-full bg-white text-brand-green border-4 border-white shadow-md mx-auto flex items-center justify-center font-bold text-2xl mb-3">
                  AS
                </div>
                <h2 className="text-xl font-bold text-brand-dark">{userProfile.name}</h2>
                <p className="text-xs text-stone-500 font-medium mb-3">{userProfile.email}</p>
                
                <span className="inline-flex items-center gap-1.5 bg-amber-50 text-amber-800 border border-amber-200/60 px-3 py-1 rounded-full text-xs font-bold">
                  <Sparkles size={13} className="text-amber-500" /> Gold Harvest Member
                </span>
                
                <div className="grid grid-cols-2 gap-2 mt-6 pt-5 border-t border-stone-100 text-left">
                  <div>
                    <span className="text-[10px] uppercase font-bold text-stone-400 block">Total Crates</span>
                    <span className="text-lg font-bold text-brand-dark">6 Boxes</span>
                  </div>
                  <div>
                    <span className="text-[10px] uppercase font-bold text-stone-400 block">Member Since</span>
                    <span className="text-lg font-bold text-brand-dark">2024</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation Tabs Menu */}
            <div className="bg-white rounded-3xl p-3 shadow-sm border border-stone-100 space-y-1">
              <button
                onClick={() => setActiveTab("orders")}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold text-sm transition-all text-left ${
                  activeTab === "orders"
                    ? "bg-brand-green text-white shadow-sm"
                    : "text-stone-600 hover:bg-stone-50 hover:text-brand-dark"
                }`}
              >
                <Package size={18} />
                <span>My Harvest Orders</span>
                <span className={`ml-auto text-xs px-2 py-0.5 rounded-full ${activeTab === "orders" ? "bg-white/20 text-white" : "bg-stone-100 text-stone-600"}`}>
                  3
                </span>
              </button>

              <button
                onClick={() => setActiveTab("addresses")}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold text-sm transition-all text-left ${
                  activeTab === "addresses"
                    ? "bg-brand-green text-white shadow-sm"
                    : "text-stone-600 hover:bg-stone-50 hover:text-brand-dark"
                }`}
              >
                <MapPin size={18} />
                <span>Delivery Addresses</span>
              </button>

              <button
                onClick={() => setActiveTab("preferences")}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold text-sm transition-all text-left ${
                  activeTab === "preferences"
                    ? "bg-brand-green text-white shadow-sm"
                    : "text-stone-600 hover:bg-stone-50 hover:text-brand-dark"
                }`}
              >
                <Heart size={18} />
                <span>Taste Preferences</span>
              </button>

              <button
                onClick={() => setActiveTab("settings")}
                className={`w-full flex items-center gap-3 px-4 py-3.5 rounded-2xl font-bold text-sm transition-all text-left ${
                  activeTab === "settings"
                    ? "bg-brand-green text-white shadow-sm"
                    : "text-stone-600 hover:bg-stone-50 hover:text-brand-dark"
                }`}
              >
                <Settings size={18} />
                <span>Profile Settings</span>
              </button>

              <div className="pt-2 border-t border-stone-100">
                <button
                  onClick={() => {
                    if (confirm("Are you sure you want to sign out?")) {
                      navigate("/");
                    }
                  }}
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-2xl font-bold text-xs text-rose-500 hover:bg-rose-50 transition-colors text-left"
                >
                  <LogOut size={16} />
                  <span>Sign Out</span>
                </button>
              </div>
            </div>

            {/* Support Help Card */}
            <div className="bg-emerald-50/80 border border-emerald-100 rounded-3xl p-5">
              <h4 className="font-bold text-emerald-950 text-sm mb-1 flex items-center gap-1.5">
                <ShieldCheck size={16} className="text-brand-green" /> Direct Orchard Desk
              </h4>
              <p className="text-xs text-emerald-800 leading-relaxed mb-3">
                Have questions about your crate or seasonal harvest batches?
              </p>
              <a
                href="https://wa.me/917018168156?text=Namaste!%20Need%20help%20with%20my%20Harvest%20Crate%20account%20or%20orders."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-brand-green text-white font-bold py-2.5 rounded-xl text-xs hover:bg-emerald-800 transition-colors"
              >
                Chat on WhatsApp (+91 70181 68156)
              </a>
            </div>

          </div>

          {/* RIGHT COLUMN: Active Tab Details */}
          <div className="lg:col-span-3">
            
            {/* TAB 1: ORDERS */}
            {activeTab === "orders" && (
              <div className="space-y-6">
                
                {/* Active Tracking Shipment Banner */}
                <div className="bg-white rounded-3xl p-6 sm:p-8 border border-brand-green/30 shadow-sm relative overflow-hidden">
                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 mb-6 pb-6 border-b border-stone-100">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <span className="text-xs font-bold uppercase tracking-wider text-brand-green bg-brand-green/10 px-3 py-1 rounded-full">
                          Live Shipment
                        </span>
                        <span className="text-xs text-stone-400 font-medium">Order #HC-9824</span>
                      </div>
                      <h3 className="text-xl font-bold text-brand-dark">Dispatched from Upper Shimla Hills</h3>
                    </div>
                    <span className="text-xs font-bold text-stone-600 bg-stone-100 px-3 py-1.5 rounded-xl">
                      Expected: Tomorrow by 2:00 PM
                    </span>
                  </div>

                  {/* Stepper Progress */}
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mb-8">
                    <div className="flex items-center sm:flex-col sm:items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-brand-green text-white flex items-center justify-center font-bold text-xs shrink-0">
                        <CheckCircle2 size={16} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-brand-dark">Tree-Plucked</p>
                        <p className="text-[11px] text-stone-400">Sep 10, 7:00 AM</p>
                      </div>
                    </div>

                    <div className="flex items-center sm:flex-col sm:items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-brand-green text-white flex items-center justify-center font-bold text-xs shrink-0">
                        <CheckCircle2 size={16} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-brand-dark">Cushioned Crate Packed</p>
                        <p className="text-[11px] text-stone-400">Sep 10, 1:30 PM</p>
                      </div>
                    </div>

                    <div className="flex items-center sm:flex-col sm:items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-amber-500 text-white flex items-center justify-center font-bold text-xs shrink-0 animate-pulse">
                        <Truck size={16} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-amber-700">In Mountain Transit</p>
                        <p className="text-[11px] text-stone-400">En route to Hub</p>
                      </div>
                    </div>

                    <div className="flex items-center sm:flex-col sm:items-start gap-3 opacity-40">
                      <div className="w-8 h-8 rounded-full bg-stone-200 text-stone-500 flex items-center justify-center font-bold text-xs shrink-0">
                        <Clock size={16} />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-stone-700">Doorstep Delivery</p>
                        <p className="text-[11px] text-stone-400">Final Drop</p>
                      </div>
                    </div>
                  </div>

                  {/* Shipment Item Preview */}
                  <div className="bg-stone-50 rounded-2xl p-4 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex items-center gap-4">
                      <img src={asset("IMAGES/3.jpg")} alt="Mountain Fuji" className="w-16 h-16 rounded-xl object-cover border border-stone-200" />
                      <div>
                        <h4 className="font-bold text-stone-900 text-sm">Mountain Fuji Apples</h4>
                        <p className="text-xs text-stone-500">10 Kg Wooden Crate · Crisp & Sweetest</p>
                        <p className="text-xs font-bold text-brand-green mt-0.5">₹3,599 (Paid online)</p>
                      </div>
                    </div>
                    <button 
                      onClick={() => alert("Tracking updates sent via SMS & WhatsApp to your registered phone.")}
                      className="text-xs font-bold text-brand-green hover:underline"
                    >
                      View Live GPS & Carrier Details →
                    </button>
                  </div>
                </div>

                {/* Past Completed Orders */}
                <h3 className="text-lg font-bold text-brand-dark pt-2">Past Harvest Orders</h3>

                {/* Past Order 1 */}
                <div className="bg-white rounded-3xl p-6 border border-stone-100 shadow-sm space-y-4">
                  <div className="flex flex-wrap justify-between items-center gap-2 pb-4 border-b border-stone-100">
                    <div>
                      <span className="text-xs font-bold text-stone-400 block">Order Date: Aug 28, 2026</span>
                      <span className="text-sm font-bold text-stone-800">Order ID: #HC-8812</span>
                    </div>
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <CheckCircle2 size={14} /> Delivered Successfully
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex items-center gap-4">
                      <img src={asset("IMAGES/1.jpg")} alt="Heritage Red" className="w-14 h-14 rounded-xl object-cover border border-stone-200" />
                      <div>
                        <h5 className="font-bold text-stone-900 text-sm">Heritage Red Delicious</h5>
                        <p className="text-xs text-stone-500">5 Kg Crate · Delivered to Gurugram</p>
                        <p className="text-xs font-bold text-stone-700 mt-0.5">₹1,499</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <button 
                        onClick={() => navigate("/product/p1")}
                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 border border-brand-green text-brand-green hover:bg-brand-green/5 text-xs font-bold rounded-xl transition-all"
                      >
                        <RotateCcw size={14} /> Reorder Box
                      </button>
                      <button 
                        onClick={() => alert("Invoice PDF downloaded.")}
                        className="px-3 py-2 text-stone-500 hover:text-stone-800 text-xs font-medium transition-colors"
                        title="Download Invoice"
                      >
                        <Download size={16} />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Past Order 2 */}
                <div className="bg-white rounded-3xl p-6 border border-stone-100 shadow-sm space-y-4">
                  <div className="flex flex-wrap justify-between items-center gap-2 pb-4 border-b border-stone-100">
                    <div>
                      <span className="text-xs font-bold text-stone-400 block">Order Date: Aug 12, 2026</span>
                      <span className="text-sm font-bold text-stone-800">Order ID: #HC-7741</span>
                    </div>
                    <span className="bg-emerald-100 text-emerald-800 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <CheckCircle2 size={14} /> Delivered Successfully
                    </span>
                  </div>

                  <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                    <div className="flex items-center gap-4">
                      <img src={asset("IMAGES/2.jpg")} alt="Golden Orchard" className="w-14 h-14 rounded-xl object-cover border border-stone-200" />
                      <div>
                        <h5 className="font-bold text-stone-900 text-sm">Golden Orchard Apples</h5>
                        <p className="text-xs text-stone-500">10 Kg Wooden Crate · Honey-sweet</p>
                        <p className="text-xs font-bold text-stone-700 mt-0.5">₹2,799</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <button 
                        onClick={() => navigate("/product/p2")}
                        className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 border border-brand-green text-brand-green hover:bg-brand-green/5 text-xs font-bold rounded-xl transition-all"
                      >
                        <RotateCcw size={14} /> Reorder Box
                      </button>
                      <button 
                        onClick={() => alert("Invoice PDF downloaded.")}
                        className="px-3 py-2 text-stone-500 hover:text-stone-800 text-xs font-medium transition-colors"
                        title="Download Invoice"
                      >
                        <Download size={16} />
                      </button>
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* TAB 2: SAVED ADDRESSES */}
            {activeTab === "addresses" && (
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-2xl font-bold text-brand-dark">Saved Delivery Locations</h3>
                    <p className="text-xs text-stone-500 mt-0.5">Where should we dispatch your fresh fruit crates?</p>
                  </div>
                  <button 
                    onClick={() => alert("Add address form opened in demo mode.")}
                    className="inline-flex items-center gap-1.5 bg-brand-green text-white font-bold px-4 py-2.5 rounded-full text-xs hover:bg-emerald-800 transition-all shadow-sm"
                  >
                    <Plus size={16} /> Add Address
                  </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {addresses.map((addr) => (
                    <div 
                      key={addr.id}
                      className={`bg-white rounded-3xl p-6 border shadow-sm flex flex-col justify-between ${
                        addr.isDefault ? "border-brand-green/50 ring-2 ring-brand-green/10" : "border-stone-100"
                      }`}
                    >
                      <div>
                        <div className="flex justify-between items-start mb-3">
                          <span className="text-xs font-bold text-brand-dark bg-stone-100 px-3 py-1 rounded-full">
                            {addr.title}
                          </span>
                          {addr.isDefault && (
                            <span className="text-[10px] bg-brand-green text-white font-bold px-2 py-0.5 rounded-full">
                              Default
                            </span>
                          )}
                        </div>
                        <h4 className="font-bold text-stone-900 text-base">{addr.name}</h4>
                        <p className="text-xs text-stone-600 mt-1 leading-relaxed">
                          {addr.street}<br />
                          {addr.city}, {addr.state} - {addr.pincode}
                        </p>
                        <p className="text-xs text-stone-500 font-medium mt-3 flex items-center gap-1.5">
                          <Phone size={13} /> {addr.phone}
                        </p>
                      </div>

                      <div className="flex gap-3 pt-6 mt-4 border-t border-stone-100 text-xs font-semibold">
                        <button 
                          onClick={() => alert("Edit address opened.")}
                          className="text-stone-600 hover:text-brand-green flex items-center gap-1"
                        >
                          <Edit3 size={14} /> Edit
                        </button>
                        {!addr.isDefault && (
                          <button 
                            onClick={() => {
                              setAddresses(prev => prev.map(a => ({ ...a, isDefault: a.id === addr.id })));
                            }}
                            className="text-brand-green hover:underline ml-auto"
                          >
                            Set as Default
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* TAB 3: TASTE PREFERENCES */}
            {activeTab === "preferences" && (
              <div className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-brand-dark">Harvest & Taste Profile</h3>
                  <p className="text-xs text-stone-500 mt-0.5">
                    We tailor our seasonal notifications and box recommendations based on what your family loves.
                  </p>
                </div>

                <div className="space-y-6 max-w-xl">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">
                      Favorite Apple Variety
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {["Mountain Fuji", "Heritage Red Delicious", "Golden Orchard", "Tart Granny Smith"].map((v) => (
                        <button
                          key={v}
                          onClick={() => setUserProfile(prev => ({ ...prev, preferredVariety: v }))}
                          className={`p-3.5 rounded-2xl border text-xs font-bold transition-all text-left ${
                            userProfile.preferredVariety === v
                              ? "border-brand-green bg-brand-green/5 text-brand-green"
                              : "border-stone-200 text-stone-600 hover:border-stone-300"
                          }`}
                        >
                          {v}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">
                      Preferred Crispness & Sweetness
                    </label>
                    <select className="w-full p-3.5 rounded-2xl border border-stone-200 text-xs font-bold text-stone-700 bg-white focus:outline-brand-green">
                      <option>Audibly Crisp & High Natural Sweetness (Mountain Style)</option>
                      <option>Tender & Buttery Soft (Kid & Senior Friendly)</option>
                      <option>Tangy & Low Glycemic Index (Diet Conscious)</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-2">
                      Household Consumption Frequency
                    </label>
                    <select className="w-full p-3.5 rounded-2xl border border-stone-200 text-xs font-bold text-stone-700 bg-white focus:outline-brand-green">
                      <option>1 Crate every 2 Weeks (Regular snacking)</option>
                      <option>1 Crate every Month</option>
                      <option>Only during Peak Autumn Harvest Season</option>
                    </select>
                  </div>

                  <button 
                    onClick={() => alert("Taste preferences updated!")}
                    className="bg-brand-green text-white font-bold px-8 py-3.5 rounded-full text-xs hover:bg-emerald-800 transition-colors shadow-md"
                  >
                    Save Preferences
                  </button>
                </div>
              </div>
            )}

            {/* TAB 4: SETTINGS */}
            {activeTab === "settings" && (
              <div className="bg-white rounded-3xl p-8 border border-stone-100 shadow-sm">
                <div className="mb-6">
                  <h3 className="text-2xl font-bold text-brand-dark">Account Details</h3>
                  <p className="text-xs text-stone-500 mt-0.5">Manage your contact information and login credentials.</p>
                </div>

                {savedSuccess && (
                  <div className="mb-6 p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
                    <CheckCircle2 size={16} /> Profile changes updated successfully!
                  </div>
                )}

                <form onSubmit={handleProfileSave} className="space-y-5 max-w-xl">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                      Full Name
                    </label>
                    <input 
                      type="text" 
                      value={userProfile.name}
                      onChange={(e) => setUserProfile({ ...userProfile, name: e.target.value })}
                      className="w-full p-3.5 rounded-2xl border border-stone-200 text-sm font-semibold text-stone-800 focus:outline-brand-green"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      value={userProfile.email}
                      onChange={(e) => setUserProfile({ ...userProfile, email: e.target.value })}
                      className="w-full p-3.5 rounded-2xl border border-stone-200 text-sm font-semibold text-stone-800 focus:outline-brand-green"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-stone-600 mb-1.5">
                      Phone Number (For Shipment SMS & WhatsApp Delivery OTP)
                    </label>
                    <input 
                      type="tel" 
                      value={userProfile.phone}
                      onChange={(e) => setUserProfile({ ...userProfile, phone: e.target.value })}
                      className="w-full p-3.5 rounded-2xl border border-stone-200 text-sm font-semibold text-stone-800 focus:outline-brand-green"
                    />
                  </div>

                  <div className="pt-4">
                    <button
                      type="submit"
                      className="bg-brand-green text-white font-bold px-8 py-3.5 rounded-full text-xs hover:bg-emerald-800 transition-colors shadow-md"
                    >
                      Save Account Changes
                    </button>
                  </div>
                </form>
              </div>
            )}

          </div>

        </div>

      </div>
    </div>
  );
}
