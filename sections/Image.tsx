import { ImageWidget } from "apps/admin/widgets.ts";

interface CircledImageProps {
  /**
   * @widget ImageWidget
   */
  image?: ImageWidget;
}

export default function CircledImage({
  image = "https://ozksgdmyrqcxcwhnbepg.supabase.co/storage/v1/object/public/assets/1818/ff6bb37e-0eab-40e1-a454-86856efc278e",
}: CircledImageProps) {
  return (
    <div class="flex justify-center items-center">
      <div class="relative w-24 h-24">
        <img src={image} alt="Circled Image" class="w-full h-full rounded-full object-cover mt-6" />
      </div>
    </div>
  );
}