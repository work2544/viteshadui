import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "~/components/ui/dialog";

interface ModalimgProps {
  src: string;
}
export default function Modalimg({ src }: ModalimgProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <img className="w-89 h-55 object-cover rounded-xl" src={src}></img>
      </DialogTrigger>

      <DialogContent className="rounded-lg">
        <DialogHeader></DialogHeader>
        <DialogDescription asChild>
          <img className="w-full rounded-xl" src={src}></img>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
