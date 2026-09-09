import React from 'react';
import { 
  X, 
  User, 
  Package, 
  MapPin, 
  ShieldCheck, 
  Clock,
  Phone,
  Truck
} from 'lucide-react';

interface AccountModalProps {
  isOpen: boolean;
  onClose: () => void;
  onViewOrder: () => void;
}

export const AccountModal: React.FC<AccountModalProps> = ({ isOpen, onClose, onViewOrder }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-xs flex items-center justify-center p-4 animate-in fade-in">
      <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-200">
        
        <div className="flex items-center justify-between pb-4 border-b border-slate-100">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#00271B] text-white flex items-center justify-center font-black">
              <User className="w-5 h-5 text-[#6CF8BB]" />
            </div>
            <div>
              <h3 className="text-sm font-black text-slate-900 font-['Space_Grotesk',sans-serif]">
                Kazi Tanvir Ahmed
              </h3>
              <p className="text-xs text-slate-500 font-medium">Verified Customer • Dhaka</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-slate-700 rounded-full cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="py-4 space-y-4">
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 text-xs">
            <div className="flex items-center justify-between mb-2">
              <span className="font-bold text-slate-800 flex items-center gap-1.5">
                <Package className="w-4 h-4 text-[#006C49]" /> Active COD Shipment
              </span>
              <span className="text-[10px] font-black bg-emerald-100 text-[#00271B] px-2 py-0.5 rounded-full">
                Out for Delivery
              </span>
            </div>
            <p className="font-extrabold text-slate-900">
              Eco Pest Guard™ Family Double Pack (900ml)
            </p>
            <p className="text-slate-500 text-[11px] mt-0.5">
              Invoice #US-BD-849201 • SteadFast Express COD (৳১,০৯০)
            </p>
            <div className="mt-3 flex items-center justify-between text-[11px] text-[#006C49] font-bold pt-2 border-t border-slate-200/80">
              <span>Expected Delivery Today by 5:00 PM</span>
              <span className="underline cursor-pointer" onClick={onViewOrder}>View Invoice</span>
            </div>
          </div>

          <div className="space-y-2 text-xs">
            <div className="p-3 rounded-xl border border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>Default: House 14, Road 7, Gulshan-2, Dhaka</span>
              </div>
              <span className="text-[#006C49] font-bold cursor-pointer">Edit</span>
            </div>
            <div className="p-3 rounded-xl border border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2 text-slate-700 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#006C49]" />
                <span>30-Day Money-Back Warranty Protected</span>
              </div>
              <span className="text-emerald-700 font-bold">Active</span>
            </div>
          </div>
        </div>

        <div className="pt-2">
          <button
            onClick={onClose}
            className="w-full py-3 bg-[#00271B] text-white text-xs font-bold rounded-xl hover:bg-[#004732] transition-colors cursor-pointer"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
};
