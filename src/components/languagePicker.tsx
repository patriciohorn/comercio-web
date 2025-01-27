import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
function LanguagePicker({ isSpanish }: any) {
  return (
    <Select>
      <SelectTrigger className="text-white w-[100px]">
        <SelectValue
          placeholder={isSpanish ? 'Espanol' : 'English'}
        />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {/* <SelectLabel>Fruits</SelectLabel> */}
          <SelectItem value="apple">Apple</SelectItem>
          <SelectItem value="banana">Banana</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export { LanguagePicker };
