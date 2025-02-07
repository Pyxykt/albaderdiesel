import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const page = () => {
  return (
    <div className="bg-secondary">
      <div className="container grid gap-8">
        <h1>
          Embark on a Rewarding <br />
          Career Journey with <span className="text-primary">ARAPCO</span>
        </h1>
        <div>
          {/* form */}
          <form className="grid gap-4">
            <Input type="email" placeholder="Email" />

            <Input type="text" placeholder="Full Name" />

            <Input type="text" placeholder="Phone" />

            <Textarea placeholder="Message" />

            <Button>Submit</Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default page;
